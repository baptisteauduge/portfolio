import React from 'react';
import 'styles/components/ProjectItem.scss';
import { Tag } from './Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

interface ProjectItemProps {
  date: React.ReactNode;
  children: React.ReactNode;
  tags: Array<string>;
  status: 'default' | 'lowOpacity';
  title: string;
  link?: string;
  /**
   * Optional thumbnail, e.g. { src: '/projects/picross.png', alt: '…' }.
   * Drop the file in public/ and reference it by absolute path: a plain
   * string keeps a missing file from breaking the build, and the image
   * removes itself if it fails to load.
   */
  image?: { src: string; alt: string };
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  date,
  children,
  tags,
  status,
  title,
  link,
  image,
}) => {
  const [imageFailed, setImageFailed] = React.useState(false);

  const open = () => {
    if (link) window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`project-item ${status}${link ? ' clickable' : ''}`}
      role={link ? 'link' : undefined}
      tabIndex={link ? 0 : undefined}
      aria-label={link ? `${title} (opens in a new tab)` : undefined}
      onClick={() => open()}
      onKeyDown={(event) => {
        if (!link) return;
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        open();
      }}
    >
      <div className="content-column">
        <p className="date">{date}</p>
        <h4>
          {title}{' '}
          {link && (
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              aria-hidden="true"
            />
          )}
        </h4>
        {children}
        {image && !imageFailed ? (
          <img
            className="thumbnail"
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        ) : null}
        <div className="tags">
          {tags.map((tag, index) => {
            return <Tag key={index}>{tag}</Tag>;
          })}
        </div>
      </div>
    </div>
  );
};
