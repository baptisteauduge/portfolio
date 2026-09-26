'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { ui } from '@/content/content';
import styles from './Media.module.css';

const HLS_TYPE = 'application/vnd.apple.mpegurl';
const MOTION_OK = '(prefers-reduced-motion: no-preference)';

type Props = {
  src: string;
  poster: string;
  label: string;
  caption: string;
  /** A live HLS stream rather than a looping video file. */
  live: boolean;
};

/**
 * A muted video or live stream that only plays while it is on screen, in a
 * visible tab, for visitors who allow motion and have not asked to save data.
 * The caption carries a Pause/Play button. The poster stands in until it
 * plays, and for good without JavaScript or, for a stream, without native HLS
 * playback (Firefox), where nothing is fetched and no button is shown.
 */
export function MotionVideo({ src, poster, label, caption, live }: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const supported = useSyncExternalStore(
    subscribeToNothing,
    () => !live || canPlayHls(),
    () => false,
  );
  const autoplay = useSyncExternalStore(
    subscribeToMotion,
    allowsAutoplay,
    () => false,
  );
  const pageVisible = useSyncExternalStore(
    subscribeToVisibility,
    isPageVisible,
    () => false,
  );
  const [inView, setInView] = useState(false);
  // The visitor's own Play or Pause, which overrides autoplay.
  const [choice, setChoice] = useState<boolean | null>(null);

  const wantsPlay = choice ?? autoplay;
  const playing = supported && inView && pageVisible && wantsPlay;

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.intersectionRatio >= 0.25),
      { threshold: 0.25 },
    );
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (playing) {
      if (!video.getAttribute('src')) video.src = src;
      video.play().catch(() => {});
    } else if (video.getAttribute('src')) {
      video.pause();
      if (live) {
        // Drop the stream so nothing downloads while it is stopped. The next
        // play starts again from the live edge.
        video.removeAttribute('src');
        video.load();
      }
    }
  }, [playing, src, live]);

  return (
    <>
      <div
        ref={frameRef}
        className={live ? styles.streamFrame : styles.videoFrame}
      >
        <video
          ref={videoRef}
          className={styles.video}
          poster={poster}
          aria-label={label}
          muted
          loop={!live}
          playsInline
          preload="none"
        />
      </div>
      <figcaption className={styles.caption}>
        <span>{caption}</span>
        {supported && (
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setChoice(!wantsPlay)}
          >
            {wantsPlay ? ui.pause : ui.play}
          </button>
        )}
      </figcaption>
    </>
  );
}

function subscribeToNothing() {
  return () => {};
}

function subscribeToMotion(onChange: () => void) {
  const query = window.matchMedia(MOTION_OK);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

function allowsAutoplay() {
  const { connection } = navigator as Navigator & {
    connection?: { saveData?: boolean };
  };
  return window.matchMedia(MOTION_OK).matches && !connection?.saveData;
}

function subscribeToVisibility(onChange: () => void) {
  document.addEventListener('visibilitychange', onChange);
  return () => document.removeEventListener('visibilitychange', onChange);
}

function isPageVisible() {
  return document.visibilityState === 'visible';
}

let hlsSupport: boolean | undefined;

function canPlayHls() {
  hlsSupport ??= document.createElement('video').canPlayType(HLS_TYPE) !== '';
  return hlsSupport;
}
