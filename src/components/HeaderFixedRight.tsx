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
    <div className="header-fixed-right">
      <div className="flex-top">
        <div className="title">
          <h1>Baptiste Audugé</h1>
          <h2>
            Engineering Student at CentraleSupélec | AI &amp; Forward Deployed
            Engineering
          </h2>
          <p>
            Seeking a 5.5-month internship beginning February/March 2027 — Asia,
            US or Canada
          </p>
        </div>
        <nav>
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
                className={`nav-element${activeElement === element ? ' active' : ''}`}
              >
                <div
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
          <a href="https://github.com/baptisteauduge" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/baptiste-auduge/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:baptiste.auduge@student-cs.fr" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="tel:+33637623051" target="_blank">
            <FontAwesomeIcon icon={faPhone} />
          </a>
          {/* TODO: drop the PDF at public/Baptiste_Auduge_Resume.pdf. The href
              is a plain string, so a missing file cannot break the build. */}
          <a
            className="resume-link"
            href="/Baptiste_Auduge_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFileArrowDown} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};
