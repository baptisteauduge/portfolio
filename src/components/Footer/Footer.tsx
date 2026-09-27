import { NE, contact, links } from '@/content/content';
import { ContactLinks } from '@/components/ContactLinks/ContactLinks';
import { ExternalLink } from '@/components/ExternalLink/ExternalLink';
import { BrandIcon } from '@/components/SocialIcons/SocialIcons';
import { Rich } from '@/components/Rich/Rich';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer id="contact" aria-labelledby="contact-h" className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.label}>{contact.label}</p>
        <h2 id="contact-h" className={styles.title}>
          <Rich value={contact.title} />
        </h2>
        <ContactLinks variant="footer" />

        {/* Phones: one ruled row per way to get in touch. */}
        <div className={`mobile-only ${styles.rows}`}>
          <a href={links.email.href} className={styles.row}>
            <span>{links.email.address}</span>
            <span aria-hidden="true" className={styles.glyph}>
              →
            </span>
          </a>
          {(['linkedin', 'github'] as const).map((icon) => (
            <ExternalLink
              key={icon}
              href={links[icon].href}
              rel="noopener noreferrer"
              className={styles.row}
            >
              <span className={styles.rowLabel}>
                <BrandIcon icon={icon} className={styles.rowIcon} />
                {links[icon].name}
              </span>
              <span aria-hidden="true" className={styles.glyph}>
                {NE}
              </span>
            </ExternalLink>
          ))}
          <ExternalLink href={links.resume.href} className={styles.row}>
            <span>{links.resume.label}</span>
            <span aria-hidden="true" className={styles.glyph}>
              ↓
            </span>
          </ExternalLink>
        </div>

        <div className={styles.bottom}>
          <span>{contact.copyright}</span>
          <span>{contact.offscreen}</span>
        </div>
      </div>
    </footer>
  );
}
