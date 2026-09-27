import { NE, featured } from '@/content/content';
import { Section } from '@/components/Section/Section';
import { SectionLabel } from '@/components/SectionLabel/SectionLabel';
import { FactList } from '@/components/FactList/FactList';
import { Media } from '@/components/Media/Media';
import { Rich } from '@/components/Rich/Rich';
import { ExternalLink } from '@/components/ExternalLink/ExternalLink';
import { Variant } from '@/components/Variant/Variant';
import styles from './Featured.module.css';

export function Featured() {
  const { highlight, primaryLink, secondaryLink } = featured;

  return (
    <Section id="work" labelledBy="featured-h">
      <SectionLabel
        label={featured.label}
        labelShort={featured.labelShort}
        aside={featured.aside}
        variant="featured"
      />
      <div className={styles.lead}>
        <Media
          media={featured.media}
          placeholder={featured.placeholder}
          caption={featured.caption}
          className={styles.figure}
        />
        <div className={styles.body}>
          <h2 id="featured-h" className={styles.title}>
            <Rich value={featured.title} />
          </h2>
          {/* On phones the press line runs on at the end of the paragraph. */}
          <div className={styles.copy}>
            <p className={styles.text}>{featured.text}</p>
            <p className={styles.press}>
              <Rich value={featured.press} />
            </p>
          </div>
          <div className={styles.links}>
            {[primaryLink, secondaryLink].map((link) => (
              <ExternalLink
                key={link.href}
                href={link.href}
                className={
                  link === primaryLink
                    ? `${styles.link} ${styles.accent}`
                    : styles.link
                }
              >
                <Variant desktop={link.label} mobile={link.shortLabel} />
                <span aria-hidden="true" className="mobile-only">
                  {NE}
                </span>
              </ExternalLink>
            ))}
          </div>
        </div>
      </div>

      <SectionLabel
        label={highlight.label}
        labelShort={highlight.labelShort}
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
