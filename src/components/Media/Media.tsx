import type { FeaturedMedia } from '@/content/content';
import { AutoplayVideo } from './AutoplayVideo';
import styles from './Media.module.css';

type Props = {
  media: FeaturedMedia | null;
  /** Shown in the striped frame until real media is set. */
  placeholder: string;
};

/** The 16:10 frame of the featured figure: placeholder, image or video loop. */
export function Media({ media, placeholder }: Props) {
  if (!media) return <div className={styles.placeholder}>{placeholder}</div>;

  if (media.kind === 'image') {
    // A plain <img>: a static export has no image optimizer, and next/image
    // would add its client runtime to the page even while no image is set.
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className={styles.frame}
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        decoding="async"
      />
    );
  }

  return (
    <AutoplayVideo
      className={styles.frame}
      src={media.src}
      poster={media.poster}
      label={media.label}
    />
  );
}
