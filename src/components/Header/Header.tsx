import { header, ui } from '@/content/content';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href={header.brand.href} className={styles.brand}>
          {header.brand.label}
        </a>
        <nav aria-label={ui.navLabel} className={styles.nav}>
          {header.nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
