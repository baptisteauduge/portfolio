import { useEffect, useState } from 'react';

export const useHandleCurrentElementInView = (
  inViewAbout: boolean,
  inViewExperiences: boolean,
  inViewProjects: boolean,
) => {
  const [currentElementInView, setCurrentElementInView] = useState('about');

  useEffect(() => {
    if (inViewAbout) {
      setCurrentElementInView('about');
    }
    if (inViewExperiences) {
      setCurrentElementInView('experiences');
    }
    if (inViewProjects) {
      setCurrentElementInView('projects');
    }
  }, [inViewAbout, inViewExperiences, inViewProjects]);

  return currentElementInView;
};
