import { ui } from '@/content/content';
import styles from './SkipLink.module.css';

export function SkipLink() {
  return (
    <a href="#main" className={styles.skip}>
      {ui.skipLink}
    </a>
  );
}
