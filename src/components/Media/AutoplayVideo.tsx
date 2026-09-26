'use client';

import { useEffect, useRef } from 'react';

type Props = {
  src: string;
  poster: string;
  label: string;
  className?: string;
};

/**
 * A muted loop that only plays when the visitor allows motion. With reduced
 * motion (or without JavaScript) it stays on its poster, with native controls
 * so it can still be played on demand.
 */
export function AutoplayVideo({ src, poster, label, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const motionOk = window.matchMedia(
      '(prefers-reduced-motion: no-preference)',
    );

    const sync = () => {
      video.controls = !motionOk.matches;
      if (motionOk.matches) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    sync();
    motionOk.addEventListener('change', sync);
    return () => motionOk.removeEventListener('change', sync);
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}
