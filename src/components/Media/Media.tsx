import type { FeaturedMedia } from '@/content/content';
import { MotionVideo } from './MotionVideo';
import styles from './Media.module.css';

type Props = {
  media: FeaturedMedia | null;
  /** Shown in the striped frame while no media is set. */
  placeholder: string;
  caption: string;
  className?: string;
};

/** The featured figure: live stream, video loop, image or placeholder. */
export function Media({ media, placeholder, caption, className }: Props) {
  if (media?.kind === 'stream' || media?.kind === 'video') {
    return (
      <figure className={className}>
        <MotionVideo
          src={media.src}
          poster={media.poster}
          label={media.label}
          caption={caption}
          live={media.kind === 'stream'}
        />
      </figure>
    );
  }

  return (
    <figure className={className}>
      {media ? (
        // A plain <img>: a static export has no image optimizer, and next/image
        // would add its client runtime to the page.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={styles.image}
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          decoding="async"
        />
      ) : (
        <div className={styles.placeholder}>{placeholder}</div>
      )}
      <figcaption className={styles.caption}>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}
