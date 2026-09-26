import { contact } from '@/content/content';
import { ContactLinks } from '@/components/ContactLinks/ContactLinks';
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
        <div className={styles.bottom}>
          <span>{contact.copyright}</span>
          <span>{contact.offscreen}</span>
        </div>
      </div>
    </footer>
  );
}
