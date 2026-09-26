// All the site's copy lives here. Components only decide how it looks, so
// wording can change without touching them.

/** A run of text with light inline formatting. */
export type Inline =
  string | { em: string } | { link: string; href: string } | { br: true };

/** Plain text, or text mixing italics, links and line breaks. */
export type Rich = string | Inline[];

export type LinkItem = { label: string; href: string };

export type Fact = { term: string; detail: string };

export type FeaturedMedia =
  | { kind: 'video'; src: string; poster: string; label: string }
  | { kind: 'image'; src: string; alt: string; width: number; height: number };

export type Role = {
  dates: string;
  /** Second line under the dates, e.g. "Part-time". */
  note?: { text: string; accent?: boolean };
  title: string;
  company: { name: string; href?: string };
  summary?: string;
  bullets: Rich[];
  tags: string[];
};

export type Project = {
  date: string;
  /** "Private", or a link to the code. */
  source: { label: string; href?: string };
  title: string;
  /** Shown muted after the title, e.g. "C++". */
  lang?: string;
  text: string;
  tags: string[];
};

export type CourseworkItem = {
  date: string;
  title: string;
  href: string;
  text: string;
};

export const site = {
  url: 'https://www.auduge.com',
  name: 'Baptiste Audugé',
  firstName: 'Baptiste',
  lastName: 'Audugé',
  gaId: 'G-V41EHHLH07',
};

export const seo = {
  title: 'Baptiste Audugé — Applied AI & machine learning',
  description:
    'CentraleSupélec engineering student building applied AI and real-time systems. Seeking a 6-month internship in applied AI / machine learning from February/March 2027 in Asia, the US or Canada.',
  imageAlt: 'Baptiste Audugé — Applied AI & machine learning',
  /** Person description in the JSON-LD structured data. */
  personDescription:
    'Engineering student at CentraleSupélec working on applied AI and machine learning, seeking a 6-month internship in applied AI / machine learning from February/March 2027 in Asia, the US or Canada.',
};

export const ui = {
  skipLink: 'Skip to content',
  navLabel: 'Sections',
  tagsLabel: 'Technologies',
};

export const links = {
  email: {
    label: 'Email me → baptiste.auduge@student-cs.fr',
    href: 'mailto:baptiste.auduge@student-cs.fr',
  },
  resume: { label: 'Resume (PDF)', href: '/Baptiste_Auduge_Resume.pdf' },
  github: {
    label: 'GitHub profile',
    href: 'https://github.com/baptisteauduge',
  },
  linkedin: {
    label: 'LinkedIn profile',
    href: 'https://www.linkedin.com/in/baptiste-auduge/',
  },
};

export const header = {
  brand: { label: 'Baptiste Audugé', href: '#top' },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ] satisfies LinkItem[],
};

export const hero = {
  eyebrow: 'Applied AI · Machine learning',
  name: 'Baptiste Audugé',
  lede: 'Engineering student at CentraleSupélec (Université Paris-Saclay), previously Sorbonne Université. I build applied AI and real-time systems that have to work outside the notebook — for uranium mines, financial advisors, and a live-streamed ATM.',
  facts: [
    {
      term: 'Looking for',
      detail:
        '6-month role in applied AI / machine learning — internship, VIE or fixed-term contract',
    },
    { term: 'Starting', detail: 'February or March 2027' },
    { term: 'Where', detail: 'Asia, the US or Canada' },
  ] satisfies Fact[],
};

export const featured = {
  label: '01 — Featured work',
  aside: 'QSTNMRK, 2026',
  // TODO(asset): add the Last Dollar loop. Put the files in public/ and set
  // media, for example:
  //   { kind: 'video', src: '/the-last-dollar.mp4', poster: '/the-last-dollar.jpg',
  //     label: 'The Last Dollar sculpture on its live stream' }
  // or { kind: 'image', src: '/the-last-dollar.jpg', alt: '…', width: 1600, height: 1000 }.
  // Frame ratio is 16:10. While media is null, the striped placeholder shows.
  media: null as FeaturedMedia | null,
  placeholder: '[ muted video loop — live stream still of the sculpture ]',
  caption: 'Fig. 1 — The Last Dollar, streaming 24/7.',
  title: [{ em: 'The Last Dollar' }] satisfies Rich,
  text: 'A 24/7 live-streamed sculpture fed by an internet-connected ATM. I built it end to end, including a low-cost streaming stack whose cost stays flat regardless of audience size.',
  press: ['Featured in ', { em: 'designboom' }, '.'] satisfies Rich,
  primaryLink: {
    label: 'Watch it live — thelastdollar.art ↗',
    href: 'https://thelastdollar.art',
  },
  secondaryLink: {
    label: 'Read the designboom feature ↗',
    href: 'https://www.designboom.com/art/internet-living-sculpture-one-dollar-time-qstnmrk-the-last-dollar/',
  },
  highlight: {
    label: 'Deep learning for real operations',
    aside: 'Orano, 2026',
    title: [
      'A physics-informed model for ',
      { em: 'uranium mine operations' },
    ] satisfies Rich,
    text: 'Asked to fix a production model planning well cleaning, I traced its errors to interactions between neighboring wells — then derived a new model from the geology literature.',
    link: { label: 'Read the full role ↓', href: '#experience' },
    facts: [
      {
        term: 'Architecture',
        detail: 'Transformer with spatio-temporal cross-attention + Neural ODE',
      },
      { term: 'Data', detail: '10,000+ well time series, up to 20 years each' },
      { term: 'Found', detail: '~30% of legacy data silently imputed' },
    ] satisfies Fact[],
  },
};

export const about = {
  label: '02 — About',
  title: [
    'Math, applied AI,',
    { br: true },
    { em: 'and systems that ship.' },
  ] satisfies Rich,
  paragraphs: [
    "I started programming at 12 and never really stopped. I did a double bachelor's in mathematics and computer science at Sorbonne Université, then joined CentraleSupélec (Université Paris-Saclay), where I'm on a gap year before my final engineering year. The mathematics is what I lean on most — usually when an AI model does something I wasn't expecting.",
    "Right now I'm a data science intern at Orano and lead developer at QSTNMRK, on art e-commerce and live-streaming projects. A few years of freelancing before that taught me to pin down what a client really needs, and to stay on the hook when something breaks after delivery.",
    "Next, I want to work close to the people who have the problem — on hard technical problems, across different clients. I'm looking for a 6-month role from February or March 2027 — internship, VIE or fixed-term contract all work for me — in Asia, the US or Canada.",
  ],
};

export const experience = {
  label: '03 — Experience',
  aside: '2020 — now',
  title: 'Experience',
  roles: [
    {
      dates: 'Jul 2026 — Jan 2027',
      note: { text: '● Current', accent: true },
      title: 'Data Scientist Intern, Deep Learning',
      company: { name: 'Orano', href: 'https://www.orano.group/' },
      summary:
        'Global nuclear fuel cycle company, from uranium mining to recycling.',
      bullets: [
        'Traced the errors of a production model planning well cleaning across uranium mines to an overlooked factor: interactions between neighboring wells.',
        'Designed a physics-informed replacement — a Transformer with spatio-temporal cross-attention coupled to a Neural ODE, trained on 10,000+ well time series spanning up to 20 years.',
        'Built the extraction from mine monitoring systems (SQL, REST) and found ~30% of legacy data silently imputed.',
      ],
      tags: [
        'PyTorch',
        'Transformers',
        'Neural ODE',
        'Physics-informed ML',
        'SQL',
        'Claude Code + MCP',
      ],
    },
    {
      dates: 'Jan 2024 — Present',
      note: { text: 'Part-time' },
      title: 'Lead Developer',
      company: { name: 'QSTNMRK' },
      summary: 'Art collective — e-commerce, IoT and live-streamed works.',
      bullets: [
        [
          'Built ',
          { link: 'The Last Dollar', href: 'https://thelastdollar.art' },
          ' end to end, featured in designboom: ATM hardware over MQTT, and a streaming stack whose cost stays flat regardless of audience size.',
        ],
        [
          'Launched 3 artistic e-commerce sites on very short deadlines: ',
          {
            link: 'The Undrinkable Can',
            href: 'https://theundrinkablecan.com',
          },
          ', ',
          {
            link: 'The American Roulette',
            href: 'https://theamericanroulette.com',
          },
          ' and ',
          { link: 'The Last Dollar', href: 'https://thelastdollar.art' },
          '.',
        ],
        'Implemented Stripe payments, MQTT device messaging and Redis caching to keep the sites responsive through traffic spikes.',
      ],
      tags: ['React', 'NestJS', 'Stripe', 'MQTT', 'Redis', 'MediaMTX + HLS'],
    },
  ] satisfies Role[],
  freelance: {
    dates: 'Nov 2020 — Sep 2024',
    title: 'Freelance — three clients',
    text: 'Fintech and insurance products, built alongside my studies.',
    roles: [
      {
        dates: '2023 — 2024',
        title: 'Fullstack Developer',
        company: {
          name: 'Logic Invest',
          href: 'https://www.logic-invest.com/simulateurs/per',
        },
        bullets: [
          'Built financial simulators for French income tax, the Pinel property investment scheme and PER retirement savings plans.',
          'Automated lead delivery to clients by lead-type preference, removing most of the manual handling.',
          "Set up a Storybook design system so the company's web apps stopped drifting apart visually.",
        ],
        tags: [
          'React',
          'NestJS',
          'TypeScript',
          'Prisma',
          'Storybook',
          'Zoho CRM',
        ],
      },
      {
        dates: 'Jun 2022 — Sep 2024',
        title: 'Product Developer',
        company: { name: 'Monaliza', href: 'https://www.monaliza.fr/' },
        summary: 'B2B2C financial products distributor.',
        bullets: [
          'Wrote the financial formulas behind a retirement savings simulator with three paths: raise retirement income, reduce taxes, or build capital.',
          'Set up the servers, development environments and monitoring with Traefik, Prometheus and Grafana.',
        ],
        tags: [
          'React',
          'NestJS',
          'TypeScript',
          'HubSpot',
          'Insurer APIs',
          'Grafana',
        ],
      },
      {
        dates: 'Nov 2020 — Jul 2022',
        title: 'Fullstack Developer',
        company: { name: 'Lexem', href: 'https://www.lexem.io/' },
        bullets: [
          "Built and iterated on the financial simulators driving the company's SEO and SEA campaigns as the market got more competitive.",
          "Designed a web app for digital client files and advisor booking — still part of the company's sales operations when it was partially acquired.",
          'Administered the internal Salesforce CRM with an external team at BayBridgeDigital.',
        ],
        tags: ['React', 'PHP', 'MySQL', 'TypeScript', 'NestJS', 'Salesforce'],
      },
    ] satisfies Role[],
  },
};

const privateSource = { label: 'Private' };
const code = (href: string) => ({ label: 'Code ↗', href });

export const projects = {
  label: '04 — Projects',
  aside: 'Newest first',
  title: 'Projects',
  groups: [
    {
      title: 'AI & Data',
      items: [
        {
          date: 'Nov 2025',
          source: privateSource,
          title: 'Autonomous Vehicle for Urban Delivery',
          text: 'A small delivery vehicle on Raspberry Pi and Arduino that detects its track by image processing, computes steering, and drives the motors through turns in an urban-like course.',
          tags: ['Computer vision', 'Raspberry Pi', 'Arduino', 'Control'],
        },
        {
          date: 'Jun 2024',
          source: privateSource,
          title: 'Graphical Models for Financial Dependency',
          text: 'Estimates conditional dependencies between MSCI World assets with Graphical Lasso. The recovered network hinges on regularization, so most of the work was model selection and rolling-window validation.',
          tags: ['Python', 'Graphical Lasso', 'Statistics', 'Finance'],
        },
        {
          date: 'May 2024 · with Bouygues Telecom',
          source: privateSource,
          title: 'Anomaly Detection on a LoRaWAN IoT Network',
          text: 'A Spark pipeline over large-scale LoRaWAN logs that flags devices and traffic behaving abnormally and points at likely causes — unsupervised, on time-series features.',
          tags: ['PySpark', 'IoT', 'Time series', 'Anomaly detection'],
        },
        {
          date: 'May 2023 · LIP6',
          source: code(
            'https://github.com/baptisteauduge/movies-recommendation-and-subtitles-analysis',
          ),
          title: 'Content-Based TV Show Recommendation',
          text: 'A recommender built on subtitle text rather than ratings, with TF-IDF, K-Means and a perceptron. Supervised by Nicolas Baskiotis; results turned out to hinge on preprocessing.',
          tags: ['NLP', 'Python', 'Scikit-learn', 'Keras'],
        },
      ] satisfies Project[],
    },
    {
      title: 'Systems & Algorithms',
      items: [
        {
          date: 'Nov 2023',
          source: code('https://github.com/baptisteauduge/picross-solver'),
          title: 'Picross Solver',
          lang: 'C++',
          text: "Two strategies: fast dynamic programming, then exhaustive backtracking with forward checking for the puzzles the first can't finish.",
          tags: ['C++', 'Dynamic programming', 'Backtracking'],
        },
        {
          date: 'Apr 2023',
          source: code('https://github.com/baptisteauduge/mygit'),
          title: 'Git-Like Version Control',
          lang: 'C',
          text: 'A small local VCS in C: init, stage, commit, branch, check out earlier versions, and merge.',
          tags: ['C', 'Data structures', 'Operating systems'],
        },
      ] satisfies Project[],
    },
  ],
  coursework: {
    title: 'Coursework — Sorbonne Université',
    items: [
      {
        date: 'Feb 2024',
        title: 'Vigenère Cipher Cracker ↗',
        href: 'https://github.com/baptisteauduge/vigenere-cipher-crack',
        text: 'Recovers key length by index of coincidence and the key by Pearson correlation. Python, course 3I024.',
      },
      {
        date: 'Jun 2023',
        title: 'Stack-Based Language Interpreter ↗',
        href: 'https://github.com/baptisteauduge/interpreter-pf2023',
        text: 'OCaml interpreter for PF23, a small PostScript-inspired language with functions and conditionals.',
      },
    ] satisfies CourseworkItem[],
  },
};

export const skills = {
  label: '05 — Skills',
  title: 'Skills',
  groups: [
    {
      title: 'Machine learning',
      items: [
        'PyTorch',
        'Transformers',
        'Neural ODEs',
        'Physics-informed ML',
        'Time series',
        'Scikit-learn',
      ],
    },
    { title: 'Data', items: ['SQL', 'REST APIs', 'Spark · PySpark'] },
    {
      title: 'Tools & infra',
      items: ['Claude Code · MCP', 'Prometheus · Grafana'],
    },
    {
      title: 'Web & real-time',
      items: [
        'React',
        'NestJS',
        'Prisma',
        'Stripe',
        'Redis',
        'MQTT',
        'MediaMTX · HLS',
      ],
    },
    {
      title: 'Languages',
      items: ['Python', 'TypeScript', 'C', 'C++', 'Java', 'OCaml', 'PHP'],
    },
  ],
};

export const contact = {
  label: '06 — Contact',
  title: [
    'Building applied AI in 2027? ',
    { em: "Let's talk." },
  ] satisfies Rich,
  copyright: '© 2026 Baptiste Audugé',
  offscreen: 'Off-screen: DJ sets, bass guitar, cooking.',
};
