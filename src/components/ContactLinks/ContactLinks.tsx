import { links } from '@/content/content';
import { SocialIcons } from '@/components/SocialIcons/SocialIcons';
import { ExternalLink } from '@/components/ExternalLink/ExternalLink';
import { Variant } from '@/components/Variant/Variant';
import styles from './ContactLinks.module.css';

type Props = {
  /**
   * hero: icons pushed to the right edge; on phones, two full-height buttons
   * and no icons. footer: desktop only, phones get row links instead.
   */
  variant: 'hero' | 'footer';
  id?: string;
};

/** Email button, resume link and profile icons. */
export function ContactLinks({ variant, id }: Props) {
  return (
    <div id={id} className={`${styles.row} ${styles[variant]}`}>
      <a href={links.email.href} className={styles.cta}>
        <Variant desktop={links.email.label} mobile={links.email.shortLabel} />
      </a>
      <ExternalLink href={links.resume.href} className={styles.resume}>
        <Variant
          desktop={links.resume.label}
          mobile={links.resume.shortLabel}
        />
      </ExternalLink>
      <SocialIcons
        className={variant === 'hero' ? styles.pushRight : undefined}
        items={[
          { icon: 'github', ...links.github },
          { icon: 'linkedin', ...links.linkedin },
        ]}
      />
    </div>
  );
}
