import { about } from '@/content/content';
import { Section } from '@/components/Section/Section';
import { SectionLabel } from '@/components/SectionLabel/SectionLabel';
import { Rich } from '@/components/Rich/Rich';
import { Variant } from '@/components/Variant/Variant';
import styles from './About.module.css';

export function About() {
  const last = about.paragraphs.length - 1;

  return (
    <Section id="about" labelledBy="about-h">
      <SectionLabel label={about.label} />
      <div className={styles.row}>
        <h2 id="about-h" className={styles.title}>
          <Rich value={about.title} />
        </h2>
        <div className={styles.body}>
          {about.paragraphs.map((paragraph, i) => (
            <p key={paragraph} className={styles.paragraph}>
              {i === last ? (
                <Variant desktop={paragraph} mobile={about.closingShort} />
              ) : (
                paragraph
              )}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
