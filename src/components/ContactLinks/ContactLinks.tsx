import { links } from '@/content/content';
import { SocialIcons } from '@/components/SocialIcons/SocialIcons';
import { ExternalLink } from '@/components/ExternalLink/ExternalLink';
import styles from './ContactLinks.module.css';

type Props = {
  /** In the hero, the icons are pushed to the right edge. */
  variant: 'hero' | 'footer';
};

/** Email button, resume link and profile icons. */
export function ContactLinks({ variant }: Props) {
  return (
    <div className={`${styles.row} ${styles[variant]}`}>
      <a href={links.email.href} className={styles.cta}>
        {links.email.label}
      </a>
      <ExternalLink href={links.resume.href} className={styles.resume}>
        {links.resume.label}
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
