import { skills } from '@/content/content';
import { Section } from '@/components/Section/Section';
import { SectionLabel } from '@/components/SectionLabel/SectionLabel';
import { TagList } from '@/components/TagList/TagList';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <Section labelledBy="skills-h">
      <SectionLabel label={skills.label} />
      <h2 id="skills-h" className={styles.heading}>
        {skills.title}
      </h2>
      <div className={styles.grid}>
        {skills.groups.map((group) => (
          <div key={group.title} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <TagList items={group.items} variant="chip" />
          </div>
        ))}
      </div>
    </Section>
  );
}
