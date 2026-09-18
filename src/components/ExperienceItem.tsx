import React from 'react';
import 'styles/components/ExperienceItem.scss';
import { Tag } from './Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

interface ExperienceItemProps {
  beginYear: string;
  endYear: string;
  context?: string;
  keyAchievements?: Array<
    string | { achievement: string; subElements: Array<string> }
  >;
  responsibilities?: Array<string>;
  additionalInformations?: Array<string>;
  tags: Array<string>;
  status: 'default' | 'lowOpacity';
  title: string;
  link: string;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  beginYear,
  endYear,
  context,
  keyAchievements,
  responsibilities,
  additionalInformations,
  tags,
  status,
  title,
  link,
}) => {
  const open = () => window.open(link, '_blank', 'noopener,noreferrer');

  return (
    <div
      className={`experience-item ${status}`}
      role="link"
      tabIndex={0}
      aria-label={`${title} (opens in a new tab)`}
      onClick={() => open()}
      onKeyDown={(event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        open();
      }}
    >
      <div className="date-column">
        <p>
          {beginYear} - {endYear}
        </p>
      </div>
      <div className="content-column">
        <p className="date">
          {beginYear} - {endYear}
        </p>
        <h3>
          {title}{' '}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
        </h3>
        {context ? <p className="context">{context}</p> : null}
        {keyAchievements?.length ? (
          <p className="key-achievements-title">
            <b>Key Achievements:</b>
          </p>
        ) : null}
        <ul>
          {keyAchievements?.map((achievement, index) => {
            return (
              <li key={index}>
                {typeof achievement === 'string' ? (
                  <p>{achievement}</p>
                ) : (
                  <div>
                    <p>{achievement.achievement}</p>
                    <ul>
                      {achievement.subElements.map((subElement, index) => {
                        return (
                          <li key={index}>
                            <p>{subElement}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        {responsibilities?.length ? (
          <p className="responsibilities-title">
            <b>Responsibilities:</b>
          </p>
        ) : null}
        <ul>
          {responsibilities?.map((responsibility, index) => {
            return (
              <li key={index}>
                <p>{responsibility}</p>
              </li>
            );
          })}
        </ul>

        {additionalInformations?.length ? (
          <p className="additional-information-title">
            <b>Additional Information:</b>
          </p>
        ) : null}
        <ul>
          {additionalInformations?.map((additionalInformation, index) => {
            return (
              <li key={index}>
                <p>{additionalInformation}</p>
              </li>
            );
          })}
        </ul>
        <div className="tags">
          {tags.map((tag, index) => {
            return <Tag key={index}>{tag}</Tag>;
          })}
        </div>
      </div>
    </div>
  );
};
