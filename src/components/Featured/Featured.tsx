import { featured } from '@/content/content';
import { Section } from '@/components/Section/Section';
import { SectionLabel } from '@/components/SectionLabel/SectionLabel';
import { FactList } from '@/components/FactList/FactList';
import { Media } from '@/components/Media/Media';
import { Rich } from '@/components/Rich/Rich';
import { ExternalLink } from '@/components/ExternalLink/ExternalLink';
import styles from './Featured.module.css';

export function Featured() {
  const { highlight } = featured;

  return (
    <Section labelledBy="featured-h">
      <SectionLabel
        label={featured.label}
        aside={featured.aside}
        variant="featured"
      />
      <div className={styles.lead}>
        <figure className={styles.figure}>
          <Media media={featured.media} placeholder={featured.placeholder} />
          <figcaption className={styles.caption}>{featured.caption}</figcaption>
        </figure>
        <div className={styles.body}>
          <h2 id="featured-h" className={styles.title}>
            <Rich value={featured.title} />
          </h2>
          <p className={styles.text}>{featured.text}</p>
          <p className={styles.press}>
            <Rich value={featured.press} />
          </p>
          <div className={styles.links}>
            <ExternalLink
              href={featured.primaryLink.href}
              className={`${styles.link} ${styles.accent}`}
            >
              {featured.primaryLink.label}
            </ExternalLink>
            <ExternalLink
              href={featured.secondaryLink.href}
              className={styles.link}
            >
              {featured.secondaryLink.label}
            </ExternalLink>
          </div>
        </div>
      </div>

      <SectionLabel
        label={highlight.label}
        aside={highlight.aside}
        variant="sub"
      />
      <div className={styles.highlight}>
        <div className={styles.highlightBody}>
          <h3 className={styles.highlightTitle}>
            <Rich value={highlight.title} />
          </h3>
          <p className={styles.highlightText}>{highlight.text}</p>
          <a href={highlight.link.href} className={styles.roleLink}>
            {highlight.link.label}
          </a>
        </div>
        <FactList facts={highlight.facts} variant="featured" />
      </div>
    </Section>
  );
}
