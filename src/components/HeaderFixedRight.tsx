import React from 'react';
import 'styles/components/HeaderFixedRight.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhone,
  faFileArrowDown,
} from '@fortawesome/free-solid-svg-icons';

interface HeaderFixedRightProps {
  elements: Array<string>;
  activeElement?: string | null;
}

export const HeaderFixedRight: React.FC<HeaderFixedRightProps> = ({
  elements,
  activeElement = null,
}) => {
  return (
    <header className="header-fixed-right">
      <div className="flex-top">
        <div className="title">
          <h1>Baptiste Audugé</h1>
          <p className="subtitle">
            Engineering Student at CentraleSupélec | AI &amp; Forward Deployed
            Engineering
          </p>
          <p>
            Seeking a 5.5-month internship beginning February/March 2027 — Asia,
            US or Canada
          </p>
        </div>
        <nav aria-label="Sections">
          {elements.map((element, index) => {
            return (
              <a
                key={index}
                onClick={(event) => {
                  event.preventDefault();
                  const elementDOM = document.querySelector(
                    '#' + element.toLowerCase(),
                  );
                  elementDOM?.scrollIntoView({ behavior: 'smooth' });
                }}
                href={`#${element.toLowerCase()}`}
                aria-current={activeElement === element ? 'true' : undefined}
                className={`nav-element${activeElement === element ? ' active' : ''}`}
              >
                <div
                  aria-hidden="true"
                  className={`nav-element-bar ${activeElement === element ? 'active' : ''}`}
                ></div>
                <p className="nav-element-text">{element.toUpperCase()}</p>
              </a>
            );
          })}
        </nav>
      </div>
      <div className="flex-bottom">
        <div className="social">
          <a
            href="https://github.com/baptisteauduge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
          >
            <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/baptiste-auduge/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
          >
            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
          </a>
          <a
            href="mailto:baptiste.auduge@student-cs.fr"
            aria-label="Email baptiste.auduge@student-cs.fr"
          >
            <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
          </a>
          <a href="tel:+33637623051" aria-label="Call +33 6 37 62 30 51">
            <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
          </a>
          <a
            className="resume-link"
            href="/Baptiste_Auduge_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download resume as PDF (opens in a new tab)"
          >
            <FontAwesomeIcon icon={faFileArrowDown} aria-hidden="true" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
};
