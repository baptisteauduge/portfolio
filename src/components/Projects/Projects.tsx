import { Fragment } from 'react';
import { projects } from '@/content/content';
import { Section } from '@/components/Section/Section';
import { SectionLabel } from '@/components/SectionLabel/SectionLabel';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import { ExternalLink } from '@/components/ExternalLink/ExternalLink';
import styles from './Projects.module.css';

export function Projects() {
  const { coursework } = projects;

  return (
    <Section id="projects" labelledBy="proj-h">
      <SectionLabel label={projects.label} aside={projects.aside} />
      <h2 id="proj-h" className={styles.heading}>
        {projects.title}
      </h2>

      {projects.groups.map((group, i) => (
        <Fragment key={group.title}>
          <h3
            className={`${styles.groupTitle} ${i === 0 ? styles.firstGroup : ''}`}
          >
            {group.title}
          </h3>
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
              <span className={styles.courseDate}>{item.date}</span>
              <div className={styles.courseBody}>
                <ExternalLink href={item.href} className={styles.courseLink}>
                  {item.title}
                </ExternalLink>
                <p className={styles.courseText}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
