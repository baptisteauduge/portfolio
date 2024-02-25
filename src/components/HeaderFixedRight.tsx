import React from 'react'
import 'styles/components/HeaderFixedRight.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

interface HeaderFixedRightProps {
  elements: Array<string>,
  activeElement?: string | null,
}

export const HeaderFixedRight: React.FC<HeaderFixedRightProps> = ({
  elements,
  activeElement = null,
}) => {
  return (
    <div className='header-fixed-right'>
      <div className="flex-top">
        <div className="title">
          <h1>Baptiste Audugé</h1>
          <h2>FullStack Freelance Developer</h2>
          <p>I'm a fullstack freelance developer, I can help you with your project, from the idea to the production.</p>
        </div>
        <nav>
          {
            elements.map((element, index) => {
              return (
                <a key={index} onClick={(event) => {
                  event.preventDefault();
                  const elementDOM = document.querySelector("#" + element.toLowerCase());
                  elementDOM?.scrollIntoView({ behavior: 'smooth' });
                }} href={`#${element.toLowerCase()}`} className={`nav-element${activeElement === element ? " active" : ""}`}>
                  <div className={`nav-element-bar ${activeElement === element ? 'active' : ''}`}></div>
                  <p className="nav-element-text">{element.toUpperCase()}</p>
                </a>
              )
            })
          }
        </nav>
      </div>
      <div className="flex-bottom">
        <div className="social">
          <a href='https://github.com/baptisteauduge' target='_blank'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='https://www.linkedin.com/in/baptiste-auduge/' target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href='mailto:baptiste@auduge.com' target='_blank'>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href='tel:+33637623051' target='_blank'>
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </div>
      </div>
    </div >
  )
}
