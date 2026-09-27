import { header, links, site, ui } from '@/content/content';
import { SocialIcons } from '@/components/SocialIcons/SocialIcons';
import { Variant } from '@/components/Variant/Variant';
import { MobileMenu } from './MobileMenu';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href={header.brand.href} className={styles.brand}>
          <Variant desktop={header.brand.label} mobile={site.shortName} />
        </a>
        <nav aria-label={ui.navLabel} className={styles.nav}>
          {header.nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>
        <MobileMenu
          items={header.menu}
          navLabel={ui.navLabel}
          openLabel={ui.menu}
          closeLabel={ui.close}
          footer={
            <SocialIcons
              size="large"
              items={[
                { icon: 'github', ...links.github },
                { icon: 'linkedin', ...links.linkedin },
              ]}
            />
          }
        />
      </div>
    </header>
  );
}
