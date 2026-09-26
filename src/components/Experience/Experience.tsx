import type { Role } from '@/content/content';
import { experience, ui } from '@/content/content';
import { Section } from '@/components/Section/Section';
import { SectionLabel } from '@/components/SectionLabel/SectionLabel';
import { TagList } from '@/components/TagList/TagList';
import { Rich } from '@/components/Rich/Rich';
import { ExternalLink } from '@/components/ExternalLink/ExternalLink';
import styles from './Experience.module.css';

export function Experience() {
  const { freelance } = experience;

  return (
    <Section id="experience" labelledBy="exp-h">
      <SectionLabel label={experience.label} aside={experience.aside} />
      <h2 id="exp-h" className={styles.heading}>
        {experience.title}
      </h2>

      {experience.roles.map((role) => (
        <RoleEntry key={role.dates} role={role} />
      ))}

      <div role="group" aria-labelledby="freelance-h" className={styles.group}>
        <div className={styles.groupHead}>
          <div className={styles.groupDates}>{freelance.dates}</div>
          <div className={styles.groupIntro}>
            <h3 id="freelance-h" className={styles.groupTitle}>
              {freelance.title}
            </h3>
            <p className={styles.groupText}>{freelance.text}</p>
          </div>
        </div>

        {freelance.roles.map((role) => (
          <RoleEntry key={role.dates} role={role} nested />
        ))}
      </div>
    </Section>
  );
}

/** One role. Nested roles sit inside the freelance group, one heading level down. */
function RoleEntry({ role, nested = false }: { role: Role; nested?: boolean }) {
  const Heading = nested ? 'h4' : 'h3';
  const company = role.company.href ? (
    <ExternalLink href={role.company.href}>{role.company.name}</ExternalLink>
  ) : (
    role.company.name
  );

  return (
    <article className={nested ? styles.nestedRole : styles.role}>
      <div className={styles.dates}>
        {nested ? (
          role.dates
        ) : (
          <>
            <div>{role.dates}</div>
            {role.note && (
              <div className={role.note.accent ? styles.accent : undefined}>
                {role.note.text}
              </div>
            )}
          </>
        )}
      </div>
      <div className={nested ? styles.nestedDetails : styles.details}>
        <Heading className={nested ? styles.nestedTitle : styles.title}>
          {role.title} · {company}
        </Heading>
        {role.summary && (
          <p className={nested ? styles.nestedSummary : styles.summary}>
            <i>{role.summary}</i>
          </p>
        )}
        <ul className={nested ? styles.nestedBullets : styles.bullets}>
          {role.bullets.map((bullet, i) => (
            <li key={i}>
              <Rich value={bullet} />
            </li>
          ))}
        </ul>
        <TagList
          items={role.tags}
          variant={nested ? 'nested' : 'role'}
          label={ui.tagsLabel}
        />
      </div>
    </article>
  );
}
