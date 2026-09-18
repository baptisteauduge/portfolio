import React from 'react';
import { HeaderFixedRight, HomePageContentLeft } from 'components';
import 'styles/pages/HomePage.scss';
import { useHandleCurrentElementInView, useSetCursorPosition } from 'hooks';
import { useInView } from 'react-intersection-observer';

const options = {
  threshold: 0.1,
};

export const HomePage = () => {
  const cursorLightRef = React.useRef<HTMLDivElement>(null);
  useSetCursorPosition(cursorLightRef);
  const { ref: refAbout, inView: inViewAbout } = useInView(options);
  const { ref: refExperiences, inView: inViewExperiences } = useInView(options);
  const { ref: refProjects, inView: inViewProjects } = useInView(options);

  const activeElement = useHandleCurrentElementInView(
    inViewAbout,
    inViewExperiences,
    inViewProjects,
  );

  return (
    <div className="home-page">
      <div ref={cursorLightRef} className="background-cursor-light"></div>
      <div className="page-centering">
        <HeaderFixedRight
          elements={['about', 'experiences', 'projects']}
          activeElement={activeElement}
        />
        <HomePageContentLeft
          refAbout={refAbout}
          refExperiences={refExperiences}
          refProjects={refProjects}
        />
      </div>
    </div>
  );
};
