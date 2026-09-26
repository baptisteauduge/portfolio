import { links, seo, site } from '@/content/content';

// Person structured data (schema.org), carried over from the previous site.
export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${site.url}/#person`,
  name: site.name,
  givenName: site.firstName,
  familyName: site.lastName,
  url: `${site.url}/`,
  image: `${site.url}/og-image.png`,
  jobTitle: 'Engineering Student at CentraleSupélec',
  description: seo.personDescription,
  email: links.email.href,
  knowsLanguage: ['en', 'fr'],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: "Bachelor's degree",
    name: "Double bachelor's degree in mathematics and computer science",
    recognizedBy: {
      '@type': 'CollegeOrUniversity',
      name: 'Sorbonne University',
      sameAs: 'https://www.sorbonne-universite.fr/',
    },
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'CentraleSupélec',
      sameAs: 'https://www.centralesupelec.fr/',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'Sorbonne University',
      sameAs: 'https://www.sorbonne-universite.fr/',
    },
  ],
  affiliation: {
    '@type': 'CollegeOrUniversity',
    name: 'CentraleSupélec',
    sameAs: 'https://www.centralesupelec.fr/',
  },
  worksFor: [
    { '@type': 'Organization', name: 'Orano', url: 'https://www.orano.group/' },
    {
      '@type': 'Organization',
      name: 'QSTNMRK',
      url: 'https://www.qstnmrk.com/',
    },
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Mathematics',
    'Deep Learning',
    'PyTorch',
    'Physics-Informed Machine Learning',
    'Time Series',
    'Anomaly Detection',
    'Natural Language Processing',
    'Computer Vision',
    'Data Engineering',
    'Python',
    'SQL',
    'TypeScript',
    'React',
    'NestJS',
    'Full-Stack Web Development',
  ],
  sameAs: [links.github.href, links.linkedin.href],
  mainEntityOfPage: {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: `${site.url}/`,
    name: `${site.name} - Portfolio`,
    inLanguage: 'en',
  },
};
