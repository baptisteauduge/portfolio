import { Fragment } from 'react';
import { projects, ui } from '@/content/content';
import { Section } from '@/components/Section/Section';
import { SectionLabel } from '@/components/SectionLabel/SectionLabel';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import { ExternalLink } from '@/components/ExternalLink/ExternalLink';
import styles from './Projects.module.css';

export function Projects() {
  const { coursework } = projects;

  return (
    <Section id="projects" labelledBy="proj-h">
      <SectionLabel
        label={projects.label}
        aside={projects.aside}
        asideShort={ui.swipe}
      />
      <h2 id="proj-h" className={styles.heading}>
        {projects.title}
      </h2>

      {projects.groups.map((group, i) => (
        <Fragment key={group.title}>
          <h3
            className={`${styles.groupTitle} ${i === 0 ? styles.firstGroup : ''}`}
          >
            {group.title}{' '}
            <span className={`mobile-only ${styles.count}`}>
              {`· ${group.items.length}`}
            </span>
          </h3>
          {/* A grid on desktop, a horizontal swipe row on phones. */}
          <div className={styles.grid}>
            {group.items.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Fragment>
      ))}

      <div className={styles.coursework}>
        <h3 className={styles.courseworkTitle}>{coursework.title}</h3>
        <ul className={styles.courseworkList}>
          {coursework.items.map((item) => (
            <li key={item.href} className={styles.course}>
              <span className={`desktop-only ${styles.courseDate}`}>
                {item.date}
              </span>
              <div className={`desktop-only ${styles.courseBody}`}>
                <ExternalLink href={item.href} className={styles.courseLink}>
                  {item.title}
                </ExternalLink>
                <p className={styles.courseText}>{item.text}</p>
              </div>
              {/* Phones: the whole row is the link. */}
              <ExternalLink
                href={item.href}
                className={`mobile-only ${styles.courseRow}`}
              >
                <span className={styles.courseRowTitle}>
                  <span>{item.title.replace(/\s*↗$/, '')}</span>
                  <span aria-hidden="true" className={styles.courseArrow}>
                    ↗
                  </span>
                </span>
                <span className={styles.courseRowText}>
                  {`${item.date} · ${item.textShort ?? item.text}`}
                </span>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
