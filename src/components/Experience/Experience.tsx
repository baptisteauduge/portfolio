import type { Role } from '@/content/content';
import { NE, experience, ui } from '@/content/content';
import { Section } from '@/components/Section/Section';
import { SectionLabel } from '@/components/SectionLabel/SectionLabel';
import { TagList } from '@/components/TagList/TagList';
import { Rich } from '@/components/Rich/Rich';
import { ExternalLink } from '@/components/ExternalLink/ExternalLink';
import { RoleAccordion, RoleItem } from './RoleAccordion';
import styles from './Experience.module.css';

export function Experience() {
  const { roles, freelance } = experience;

  return (
    <Section id="experience" labelledBy="exp-h">
      <SectionLabel
        label={experience.label}
        aside={experience.aside}
        asideShort={ui.tapToExpand}
      />
      <h2 id="exp-h" className={styles.heading}>
        {experience.title}
      </h2>

      {/* On phones each role collapses; the first one starts open. */}
      <RoleAccordion defaultOpen={0}>
        {roles.map((role, i) => (
          <RoleEntry key={role.dates} role={role} index={i} />
        ))}

        <div
          role="group"
          aria-labelledby="freelance-h"
          className={styles.group}
        >
          <div className={styles.groupHead}>
            <div className={styles.groupDates}>{freelance.dates}</div>
            <div className={styles.groupIntro}>
              <h3 id="freelance-h" className={styles.groupTitle}>
                {freelance.title}
              </h3>
              <p className={styles.groupText}>
                <span className="mobile-only">{`${freelance.dates} · `}</span>
                {freelance.text}
              </p>
            </div>
          </div>

          {freelance.roles.map((role, i) => (
            <RoleEntry
              key={role.dates}
              role={role}
              index={roles.length + i}
              nested
            />
          ))}
        </div>
      </RoleAccordion>
    </Section>
  );
}

type EntryProps = { role: Role; index: number; nested?: boolean };

/** One role. Nested roles sit inside the freelance group, one heading level down. */
function RoleEntry({ role, index, nested = false }: EntryProps) {
  const Heading = nested ? 'h4' : 'h3';
  const bodyId = `role-${index}`;
  const { href, name } = role.company;
  const company = href ? <ExternalLink href={href}>{name}</ExternalLink> : name;

  // On phones the company name in the toggle is plain text, so its link moves
  // into the body: after the summary for main roles, after the tags otherwise.
  const phoneLink = href && (
    <ExternalLink href={href}>
      {nested
        ? ui.site
        : `${new URL(href).hostname.replace(/^www\./, '')} ${NE}`}
    </ExternalLink>
  );

  return (
    <RoleItem
      index={index}
      nested={nested}
      bodyId={bodyId}
      head={<PhoneHead role={role} nested={nested} />}
    >
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
      <div
        id={bodyId}
        className={nested ? styles.nestedDetails : styles.details}
      >
        <Heading className={nested ? styles.nestedTitle : styles.title}>
          {role.title} · {company}
        </Heading>
        {role.summary && (
          <p className={nested ? styles.nestedSummary : styles.summary}>
            <i>{role.summary}</i>
            {!nested && phoneLink && (
              <span className="mobile-only"> {phoneLink}</span>
            )}
          </p>
        )}
        <ul className={nested ? styles.nestedBullets : styles.bullets}>
          {role.bullets.map((bullet, i) => (
            <li key={i}>
              <Rich value={bullet} />
            </li>
          ))}
        </ul>
        <div className={styles.tags}>
          <TagList
            items={role.tags}
            variant={nested ? 'nested' : 'role'}
            label={ui.tagsLabel}
          />
          {nested && phoneLink && (
            <span className="mobile-only"> · {phoneLink}</span>
          )}
        </div>
      </div>
    </RoleItem>
  );
}

/** The phone toggle's three lines: dates, title, company. */
function PhoneHead({ role, nested }: { role: Role; nested: boolean }) {
  const current = role.note?.accent;
  const dates = current
    ? `${ui.current} ${role.dates}`
    : role.note
      ? `${role.dates} · ${role.note.text}`
      : role.dates;

  return (
    <span>
      <span className={current ? styles.headDatesCurrent : styles.headDates}>
        {dates}
      </span>
      <span className={styles.headTitle}>
        {nested ? `${role.title} · ${role.company.name}` : role.title}
      </span>
      {!nested && (
        <span className={styles.headCompany}>{role.company.name}</span>
      )}
    </span>
  );
}
