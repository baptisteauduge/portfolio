import React from 'react';
import 'styles/components/HomePageContentLeft.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faBook,
  faMicrochip,
  faUserTie,
  faMusic,
  faHeart,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { ExperienceItem } from './ExperienceItem';
import { ProjectItem } from './ProjectItem';

interface HomePageContentLeftProps {
  refAbout: (node?: Element | null | undefined) => void;
  refExperiences: (node?: Element | null | undefined) => void;
  refProjects: (node?: Element | null | undefined) => void;
}

export const HomePageContentLeft: React.FC<HomePageContentLeftProps> = ({
  refAbout,
  refExperiences,
  refProjects,
}) => {
  return (
    <div className="home-page-content-left">
      <main>
        <div ref={refAbout} className="about-section">
          <h2 id="about">
            Bridging the Gap: Between Academia and Real-World Development
          </h2>
          <b>
            <FontAwesomeIcon icon={faRocket} />
            Where It Started
          </b>
          <p>
            I started programming at 12, mostly out of curiosity, and never
            really stopped. What I like about it hasn't changed much since. I
            want to understand a problem properly before writing anything, and
            then I want the result to actually run, not just demo well.
          </p>
          <b>
            <FontAwesomeIcon icon={faBook} />
            My Academic Journey
          </b>
          <p>
            I did a double bachelor's degree in mathematics and computer science
            at Sorbonne University, then joined CentraleSupélec, where I'm on
            the first of two gap years, before my final engineering year. The
            mathematics side is what I lean on most these days, usually when a
            model does something I wasn't expecting.
          </p>
          <b>
            <FontAwesomeIcon icon={faMicrochip} />
            Technical Expertise
          </b>
          <p>
            Most of my work right now is applied AI: deep learning in PyTorch,
            Transformers, Neural ODEs, and physics-informed models for
            time-series data. A lot of it is less glamorous than that sounds. I
            spend a good part of my time pulling data out of SQL databases and
            REST APIs and checking what is really in it. I've also used Spark on
            large-scale IoT logs. I use Claude Code and MCP tooling daily. On
            the web side I work in Python, TypeScript, React, and NestJS, and
            I've written a fair amount of C, C++, Java, and OCaml along the way.
          </p>
          <b>
            <FontAwesomeIcon icon={faUserTie} />
            Professional Experience
          </b>
          <p>
            I'm currently a data science intern at Orano, on a model used to
            plan operations across uranium mines. Most of what I've learned
            there came from the operations and geology teams, who understand the
            problem far better than I did when I arrived. I also work as lead
            developer at QSTNMRK, on artistic e-commerce and live-streaming
            projects. Before that I did freelance work for a few years, which is
            where I learned to talk to clients, write down what they actually
            need, and handle things breaking after delivery.
          </p>
          <b>
            <FontAwesomeIcon icon={faHeart} />
            Areas of Interest
          </b>
          <p>
            I'm drawn to AI that has to work outside a notebook:
            physics-informed and time-series modeling, anomaly detection on
            sensor data, and the agent and MCP tooling that is changing how
            software gets written. High performance computing and embedded
            systems interest me too, though I've spent less time on them so far.
          </p>
          <b>
            <FontAwesomeIcon icon={faMusic} />
            Beyond the Code
          </b>
          <p>
            Outside of computer science, I DJ, play bass guitar, and cook. I'd
            rather not spend all my time in front of a screen.
          </p>
          <b>
            <FontAwesomeIcon icon={faEye} />
            Looking Ahead
          </b>
          <p>
            I'm looking for a 5.5-month internship starting in February or March
            2027, in Asia, the US, or Canada. What interests me is the forward
            deployed side of AI, being close to the people who have the problem
            rather than a few teams away from them. If you're hiring for
            something like that, I'd be glad to talk.
          </p>
        </div>
        <div ref={refExperiences} className="experiences-section">
          <h2 id="experiences">Professional Experiences</h2>
          <div className="experiences-container">
            <ExperienceItem
              beginYear="Jul 2026"
              endYear="Jan 2027"
              tags={[
                'PyTorch',
                'Transformers',
                'Neural ODE',
                'Physics-Informed ML',
                'Time Series',
                'Python',
                'SQL',
                'Claude Code',
                'MCP',
              ]}
              keyAchievements={[
                'Asked to fix a production AI model used to plan well cleaning across uranium mines; traced its errors to an overlooked factor: interactions between neighboring wells.',
                'Designed a new physics-informed model: studied the geology literature and derived its governing equations.',
                'Built the data extraction (SQL, REST APIs) from the mine monitoring systems; found ~30% of legacy data silently imputed.',
              ]}
              responsibilities={[
                'Implementing the model in PyTorch: a Transformer with spatio-temporal cross-attention coupled to a Neural ODE, trained on 10,000+ well time series spanning up to 20 years.',
                'Working with operations and geology teams to turn an operational problem into a modeling approach.',
                'Developing with Claude Code and MCP tooling.',
              ]}
              status="default"
              title="Data Scientist Intern - Deep Learning & Generative AI • Orano"
              context="Global nuclear fuel cycle company (uranium mining to recycling)"
              link="https://www.orano.group/"
            />
            <ExperienceItem
              beginYear="Jan 2024"
              endYear="Present"
              tags={[
                'React',
                'NestJs',
                'Stripe',
                'MQTT',
                'Redis',
                'Cloudflare',
                'MediaMTX',
                'HLS',
                'SSE',
              ]}
              keyAchievements={[
                'The Last Dollar (2026), featured in designboom: a 24/7 live-streamed sculpture fed by an internet-connected ATM. Built end-to-end, including a low-cost streaming infrastructure designed to keep cost flat regardless of audience size.',
                {
                  achievement:
                    'Launched 3 artistic websites with e-commerce functionality on (very) short deadlines. These websites include:',
                  subElements: [
                    'The Undrinkable Can',
                    'The American Roulette',
                    'The Last Dollar',
                  ],
                },
              ]}
              responsibilities={[
                'Delivering e-commerce websites at high velocity, from fast prototyping to launch, to meet tight artistic deadlines.',
                'Implementing payments (Stripe), IoT communication (MQTT), and caching (Redis) to keep the user experience smooth as traffic scales.',
                'Working closely with designers and artists to translate creative briefs into production-ready sites, and maintaining deployments and monitoring.',
              ]}
              status="default"
              title="Lead Developer • QSTNMRK"
              link="https://www.designboom.com/art/internet-living-sculpture-one-dollar-time-qstnmrk-the-last-dollar/"
              links={[
                { label: 'The Last Dollar', url: 'https://thelastdollar.art' },
                {
                  label: 'designboom feature',
                  url: 'https://www.designboom.com/art/internet-living-sculpture-one-dollar-time-qstnmrk-the-last-dollar/',
                },
              ]}
            />
            {/* TODO: Logic Invest is the only experience shown in years. What
                are the exact start and end months? */}
            <ExperienceItem
              beginYear="2023"
              endYear="2024"
              tags={[
                'React',
                'NestJs',
                'Storybook',
                'Prisma',
                'Typescript',
                'ZohoCRM',
                'Vercel',
                'Heroku',
              ]}
              keyAchievements={[
                {
                  achievement:
                    'Built two financial simulators with React and NestJS, each covering a part of the French tax system:',
                  subElements: [
                    'Income tax estimation, bracket by bracket',
                    'The PINEL property investment scheme',
                    'PER (Plan Épargne Retraite) retirement savings plans',
                  ],
                },
                'Automated the delivery of leads to clients based on their lead-type preferences, which removed most of the manual handling.',
                'Set up a design system in Storybook, so the different web applications stopped drifting apart visually.',
              ]}
              status="default"
              title="Fullstack Developer • Logic Invest"
              link="https://www.logic-invest.com/simulateurs/per"
            />
            {/* TODO: confirm the Generali partnership is public before this
                ships to recruiters. */}
            <ExperienceItem
              beginYear="Jun 2022"
              endYear="Sep 2024"
              tags={[
                'React',
                'NestJs',
                'Hubspot',
                'Insurer APIs',
                'Sapiendo',
                'TypeScript',
                'Grafana',
                'Prometheus',
                'Traefik',
              ]}
              status="default"
              title="Product Developer • Monaliza"
              context="B2B2C financial products distributor, in partnership with Generali"
              keyAchievements={[
                'Worked with the product team on the monaliza retirement savings simulator, in React and NestJS, writing the financial formulas behind the estimates it returns. It has three paths, depending on whether the user wants to improve their retirement income, reduce taxes, or build capital.',
                'Set up the servers, the development environments, and the monitoring, with Traefik, Prometheus, and Grafana.',
              ]}
              link="https://www.monaliza.fr/"
            />
            <ExperienceItem
              beginYear="Nov 2020"
              endYear="Jul 2022"
              tags={[
                'React',
                'Php',
                'Salesforce',
                'Insurer APIs',
                'MySQL',
                'Javascript',
                'TypeScript',
                'NestJs',
              ]}
              status="default"
              title="Fullstack Developer • Lexem"
              keyAchievements={[
                'Built and maintained the financial simulators used in the SEO and SEA campaigns, and reworked them over several iterations as the market got more competitive.',
                "Designed and built a web application for submitting client files digitally and booking appointments between advisors and prospects. The platform was part of the company's sales operations at the time of its partial acquisition.",
                'Administered the internal Salesforce CRM, with an external team at BayBridgeDigital.',
              ]}
              link="https://www.lexem.io/"
            />
          </div>
        </div>
        <div ref={refProjects} className="projects-section">
          <h2 id="projects">Projects</h2>
          <h3 className="project-group">AI &amp; Data</h3>
          {/* TODO: add the generative AI project (RAG, agent or MCP
              server) here, at the top of this group. */}
          {/* TODO: no public repo found for this one. Add `link` if it can be shared (the Bouygues Telecom work may not be). */}
          <ProjectItem
            date="May 2024"
            status="default"
            title="Anomaly Detection on a LoRaWAN IoT Network"
            tags={[
              'PySpark',
              'Spark',
              'IoT',
              'Time Series',
              'Anomaly Detection',
            ]}
          >
            <p>
              A Spark pipeline over large-scale LoRaWAN network logs that flags
              devices and traffic patterns behaving abnormally, and points at
              possible causes. The detection is unsupervised, on time-series
              features derived from the logs. Built with Bouygues Telecom.
            </p>
          </ProjectItem>
          {/* TODO: no public repo found. Add `link` if you push this one. */}
          <ProjectItem
            date="June 2024"
            status="default"
            title="Graphical Models for Financial Dependency Analysis"
            tags={[
              'Python',
              'Graphical Models',
              'Finance',
              'Statistics',
              'Machine Learning',
            ]}
          >
            <p>
              Estimates the conditional dependencies between MSCI World assets
              with Graphical Lasso, then reads the network that comes out of it.
              The structure you recover depends heavily on the regularization
              you pick, so most of the work was model selection and
              rolling-window validation.
            </p>
          </ProjectItem>
          {/* TODO: no public repo found. Add `link` if you push this one. */}
          <ProjectItem
            date="November 2025"
            status="default"
            title="Autonomous Vehicle for Urban Delivery"
            tags={[
              'Computer Vision',
              'Embedded Systems',
              'Arduino',
              'Raspberry Pi',
              'Control',
            ]}
          >
            <p>
              A small delivery vehicle that follows a route on its own, running
              on a Raspberry Pi and an Arduino. It detects the track by image
              processing, computes a steering command, and drives the motors to
              stay on the route and take turns, in a constrained urban-like
              environment.
            </p>
          </ProjectItem>
          <ProjectItem
            date="May 2023"
            status="default"
            title="Content-Based TV Show Recommendation (NLP)"
            link="https://github.com/baptisteauduge/movies-recommendation-and-subtitles-analysis"
            tags={[
              'Natural Language Processing',
              'Python',
              'Machine Learning',
              'Data Science',
              'Recommendation Systems',
              'Scikit-learn',
              'Matplotlib',
              'Keras',
            ]}
          >
            <p>
              A recommender built on subtitle text rather than ratings, using
              TF-IDF, K-Means, and a perceptron. Supervised by Nicolas Baskiotis
              (LIP6). The interesting part was how much the results depended on
              preprocessing choices.
            </p>
          </ProjectItem>
          <h3 className="project-group">Systems &amp; Algorithms</h3>
          <ProjectItem
            date="April 2023"
            status="default"
            title="Git-Like Version Control System (C)"
            link="https://github.com/baptisteauduge/mygit"
            tags={[
              'C',
              'Version Control System',
              'Data Structures',
              'Algorithms',
              'Operating Systems',
            ]}
          >
            {/* TODO: one line on what was hardest here (the object store? merging?) would match the other projects. */}
            <p>
              A small version control system in C, for local repositories. It
              can initialize a repository, stage and commit changes, create and
              switch branches, browse earlier versions, and merge branches.
            </p>
          </ProjectItem>
          <ProjectItem
            date="November 2023"
            status="default"
            title="Picross Solver (C++)"
            link="https://github.com/baptisteauduge/picross-solver"
            tags={[
              'Algorithms',
              'C++',
              'Dynamic Programming',
              'Backtracking',
              'Forward Checking',
            ]}
          >
            <p>
              A Picross solver with two strategies: a fast one based on dynamic
              programming, and an exhaustive backtracking search with forward
              checking for the puzzles the first one can't finish. Runs from the
              command line on a puzzle file.
            </p>
          </ProjectItem>
          <ProjectItem
            date="June 2023"
            status="default"
            title="Stack-Based Language Interpreter (OCaml)"
            link="https://github.com/baptisteauduge/interpreter-pf2023"
            tags={[
              'OCaml',
              'Interpreter',
              'Functional Programming',
              'Stack Based Language',
              'PostScript',
            ]}
          >
            {/* TODO: which course was PF23 written for? The other projects name their course or supervisor. */}
            <p>
              An interpreter in OCaml for PF23, a small stack-based language
              inspired by PostScript. Programs push numbers and booleans onto a
              stack and work on them with operators, user-defined functions, and
              conditionals.
            </p>
          </ProjectItem>
          <ProjectItem
            date="February 2024"
            status="default"
            title="Vigenère Cipher Cracker"
            link="https://github.com/baptisteauduge/vigenere-cipher-crack"
            tags={['Cryptography', 'Python', 'Algorithms', 'Cybersecurity']}
          >
            <p>
              Breaks Vigenère ciphertext without the key, using the index of
              coincidence to find the key length and Pearson correlation to
              recover it. Written for the cryptography course (3I024) at
              Sorbonne University.
            </p>
          </ProjectItem>
        </div>
      </main>
      <footer>
        <br />
        <p className="credits">
          Crafted with ❤️ by Baptiste Audugé. Built using React and Vite for a
          smooth user experience, and deployed on Vercel for lightning-fast
          performance. This website's design is heavily influenced by the work
          of <i>Brittany Chiang</i>, a skilled UI designer and software
          engineer.
        </p>
        <br />
        <br />
        <br />
      </footer>
    </div>
  );
};
