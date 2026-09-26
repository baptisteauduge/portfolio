import type { Project } from '@/content/content';
import { ui } from '@/content/content';
import { ExternalLink } from '@/components/ExternalLink/ExternalLink';
import { TagList } from '@/components/TagList/TagList';
import styles from './ProjectCard.module.css';

export function ProjectCard({ project }: { project: Project }) {
  const { date, source, title, lang, text, tags } = project;

  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <span>{date}</span>
        {source.href ? (
          <ExternalLink href={source.href} className={styles.code}>
            {source.label}
          </ExternalLink>
        ) : (
          <span>{source.label}</span>
        )}
      </div>
      <h4 className={styles.title}>
        {title}
        {lang && (
          <>
            {' '}
            <span className={styles.lang}>{`(${lang})`}</span>
          </>
        )}
      </h4>
      <p className={styles.text}>{text}</p>
      <TagList items={tags} variant="card" label={ui.tagsLabel} />
    </article>
  );
}
