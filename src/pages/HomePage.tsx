import React from 'react';
import { HeaderFixedRight, HomePageContentLeft } from 'components'
import 'styles/pages/HomePage.scss'
import { useHandleCurrentElementInView, useSetCursorPosition } from 'hooks';
import { useInView } from 'react-intersection-observer';

const options = {
  threshold: 0.1
}

export const HomePage = () => {

  const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });
  useSetCursorPosition(setCursorPosition);
  const { ref: refAbout, inView: inViewAbout } = useInView(options);
  const { ref: refExperiences, inView: inViewExperiences } = useInView(options);
  const { ref: refProjects, inView: inViewProjects } = useInView(options);

  const activeElement = useHandleCurrentElementInView(inViewAbout, inViewExperiences, inViewProjects);

  return (
    <div className='home-page'>
      <div className="background-cursor-light" style={{
        background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      }}></div>
      <div className="page-centering">
        <HeaderFixedRight elements={["about", "experiences", "projects"]} activeElement={activeElement} />
        <HomePageContentLeft
          refAbout={refAbout}
          refExperiences={refExperiences}
          refProjects={refProjects}
        />
      </div>
    </div>
  )
}
