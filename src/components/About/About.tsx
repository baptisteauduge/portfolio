import { about } from '@/content/content';
import { Section } from '@/components/Section/Section';
import { SectionLabel } from '@/components/SectionLabel/SectionLabel';
import { Rich } from '@/components/Rich/Rich';
import styles from './About.module.css';

export function About() {
  return (
    <Section id="about" labelledBy="about-h">
      <SectionLabel label={about.label} />
      <div className={styles.row}>
        <h2 id="about-h" className={styles.title}>
          <Rich value={about.title} />
        </h2>
        <div className={styles.body}>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
