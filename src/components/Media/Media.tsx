import Image from 'next/image';
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
    return (
      <Image
        className={styles.frame}
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
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
