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
            Driven by Curiosity, Fueled by Innovation
          </b>
          <p>
            From a young age, I've been fascinated by the way technology can
            solve problems and push boundaries. This passion led me into
            programming at the age of 12, and I have been building things ever
            since. What I enjoy most has not changed: taking a problem someone
            actually has, understanding it deeply enough to model it, and
            shipping something that works in production.
          </p>
          <b>
            <FontAwesomeIcon icon={faBook} />
            My Academic Journey
          </b>
          <p>
            I studied mathematics and computer science in a double bachelor's
            program at Sorbonne University, and I'm now a student at
            CentraleSupélec, in a rigorous engineering program that builds on
            that foundation. It is what lets me read a scientific paper, derive
            the equations that govern a physical system, and turn them into a
            model that runs.
          </p>
          <b>
            <FontAwesomeIcon icon={faMicrochip} />
            Technical Expertise
          </b>
          <p>
            My core work today is applied AI: deep learning in PyTorch,
            Transformers and Neural ODEs, physics-informed modeling, and
            time-series problems where the data is messy and the domain matters.
            Around the model, I handle the unglamorous half — extracting data
            over SQL and REST APIs, auditing what it actually contains, and
            processing it at scale with Spark. I also develop with Claude Code
            and MCP tooling day to day. Alongside that, I'm a full-stack
            engineer in Python, TypeScript, React, and NestJS, and I'm
            comfortable in C, C++, Java, and OCaml.
          </p>
          <b>
            <FontAwesomeIcon icon={faUserTie} />
            Professional Experience
          </b>
          <p>
            I'm currently a data science intern at Orano, where I work on a
            production model used to plan operations across uranium mines, side
            by side with the operations and geology teams who rely on it. In
            parallel, I lead development at QSTNMRK, shipping artistic
            e-commerce and live-streaming projects end to end. Before that,
            freelance work taught me the part that no course does: sitting with
            a client, turning a vague business need into a specification, and
            being accountable for what happens after it goes live.
          </p>
          <b>
            <FontAwesomeIcon icon={faHeart} />
            Areas of Interest
          </b>
          <p>
            I'm most interested in AI that has to survive contact with the real
            world: physics-informed and time-series modeling, anomaly detection
            on large-scale sensor data, and the agent and MCP tooling that is
            changing how software gets built. High performance computing and
            embedded systems keep pulling me in too, and I look for projects and
            research that let me go deeper into all of it.
          </p>
          <b>
            <FontAwesomeIcon icon={faMusic} />
            Beyond the Code
          </b>
          <p>
            While I'm deeply passionate about technology, I value a well-rounded
            life. My interests extend beyond computer science: I DJ, I play bass
            guitar, and I cook.
          </p>
          <b>
            <FontAwesomeIcon icon={faEye} />
            Looking Ahead
          </b>
          <p>
            I'm looking for a 5.5-month internship starting in February or March
            2027, in Asia, the US, or Canada, as an AI forward deployed
            engineer: sitting close to the people with the problem, and building
            the model and the software that solves it. If that sounds like your
            team, I'd love to hear from you.
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
                'The Last Dollar (2026), featured in designboom: a 24/7 live-streamed sculpture fed by an internet-connected ATM. Built end-to-end, including a low-cost streaming infrastructure whose cost stays flat regardless of audience size.',
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
            />
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
                    'Developed and launched 2 financial simulators using React and NestJS, leading to a 4% increase in conversion rates and generating qualified leads in a highly competitive market. These simulators cover diverse aspects of the French tax system, including:',
                  subElements: [
                    'Tax estimation for the French income tax (slice tax)',
                    'Analysis of the PINEL investment law',
                    'PER (Plan Épargne Retraite) retirement savings plan simulation',
                  ],
                },
                'Automated 100% of data delivery to clients based on their lead type preferences, reducing manual work by 50% and improving client satisfaction through faster and more accurate data delivery.',
                'Developed and implemented a comprehensive design system using Storybook, ensuring consistency and maintainability across all web applications. This resulted in improved developer efficiency, reduced design inconsistencies, and a more seamless user experience.',
              ]}
              responsibilities={[
                'Led the development and maintenance of web applications using modern technologies.',
                'Collaborated with stakeholders to understand requirements, design solutions, and deliver projects on time and within budget.',
                'Managed technical data infrastructure and ensured data integrity and security.',
              ]}
              status="default"
              title="Fullstack Developer • Logic Invest"
              link="https://www.logic-invest.com/simulateurs/per"
            />
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
              keyAchievements={[
                'Collaborated closely with the product team to conceptualize the monaliza digital retirement savings platform. Developed financial simulators, server infrastructure, and monitoring solutions. This platform empowers users to simulate their retirement pension, reduce taxes, and generate a lifetime complementary income.',
                'Played a pivotal role in the development of the monaliza financial simulator using React and NestJS, incorporating key financial formulas and providing users with personalized estimates and information. The simulator offers three paths corresponding to different retirement objectives: improving retirement income, reducing taxes, and building capital.',
                "Implemented and configured servers, development environments, and monitoring solutions using Traefik, Prometheus, and Grafana. This ensured the platform's scalability, reliability, and performance.",
              ]}
              responsibilities={[
                'Collaborated with the product team to conceptualize and design the monaliza platform.',
                "Developed and maintained the platform's financial simulator using React and NestJS.",
                'Implemented and configured servers, development environments, and monitoring solutions.',
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
                'Developed and optimized multiple financial simulators for SEO/SEA marketing, driving increased lead generation and conversion. This helped adapt to growing market competition and improve campaign effectiveness.',
                'Conceived, designed, and implemented a web application for digital client file submission and appointment optimization between advisors and prospects. This streamlined the client intake process and improved efficiency.',
                'Managed the internal Salesforce CRM administration in collaboration with an external team at BayBridgeDigital. This ensured data integrity and optimized internal processes.',
              ]}
              additionalInformations={[
                'Developed several iterations of the web application and financial simulators to adapt to evolving market needs and optimize conversion rates.',
                "The developed infrastructure played a crucial role in securing a successful business acquisition, highlighting its significant impact on the company's growth and overall success.",
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
          <ProjectItem
            date="May 2024"
            status="default"
            title="Anomaly detection on LoRaWAN IoT network"
            tags={[
              'PySpark',
              'Spark',
              'IoT',
              'Time Series',
              'Anomaly Detection',
            ]}
          >
            <p>
              In collaboration with Bouygues Telecom, I built a Spark-based data
              pipeline to process large-scale LoRaWAN network logs and detect
              abnormal behaviors. Using time-series features and unsupervised
              methods, the system identifies anomalous devices or traffic
              patterns and suggests potential root causes.
            </p>
          </ProjectItem>
          <ProjectItem
            date="June 2024"
            status="default"
            title="Graphical models for financial dependency analysis"
            tags={[
              'Python',
              'Graphical Models',
              'Finance',
              'Statistics',
              'Machine Learning',
            ]}
          >
            <p>
              I implemented graphical models to study conditional dependencies
              between MSCI World assets using Graphical Lasso. The project
              included model selection, rolling-window validation, and
              interpretation of the resulting network structure to better
              understand market dynamics.
            </p>
          </ProjectItem>
          <ProjectItem
            date="November 2025"
            status="default"
            title="Autonomous vehicle for urban delivery"
            tags={[
              'Computer Vision',
              'Embedded Systems',
              'Arduino',
              'Raspberry Pi',
              'Control',
            ]}
          >
            <p>
              I designed and programmed a small autonomous delivery vehicle
              combining image processing and control algorithms. Running on
              Raspberry Pi and Arduino, the system detects the track, computes
              steering commands, and controls the motors to follow routes and
              handle turns in a constrained urban-like environment.
            </p>
          </ProjectItem>
          <ProjectItem
            date="May 2023"
            status="default"
            title="Content-Based TV Show Recommendation Algorithm using NLP"
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
              Under the guidance of Nicolas Baskiotis, a researcher at LIP6, we
              delved into developing a content-based recommendation algorithm
              leveraging natural language processing (NLP). Utilizing publicly
              available data, we applied powerful tools like TF-IDF, K-Means,
              and Perceptron to uncover hidden patterns and connections within
              the content. This exploration aimed to determine the effectiveness
              of this approach in recommending TV shows, ultimately assessing
              its viability as a personalized recommendation method.
            </p>
          </ProjectItem>
          <h3 className="project-group">Systems &amp; Algorithms</h3>
          <ProjectItem
            date="April 2023"
            status="default"
            title="Git-like version control system using C"
            link="https://github.com/baptisteauduge/mygit"
            tags={[
              'C',
              'Version Control System',
              'Data Structures',
              'Algorithms',
              'Operating Systems',
            ]}
          >
            <p>
              I developed a miniature Git version control system in C, allowing
              users to manage local code repositories. Users can initialize
              repositories, create and switch between branches, stage and commit
              changes, explore past versions, and even merge branches. Built
              with modularity and clarity, this project provides a valuable
              learning experience in version control fundamentals.{' '}
            </p>
          </ProjectItem>
          <ProjectItem
            date="November 2023"
            status="default"
            title="Picross Solver using Dynamic Programming, backtracking (forward checking) algorithms in C++"
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
              We built a Picross solver in C++, wielding dynamic programming and
              backtracking for efficient solutions. One approach prioritizes
              speed, tackling puzzles quickly, while another guarantees a
              solution, even for the trickiest ones. Both leverage an initial
              analysis, then the second employs a more exhaustive search if
              needed. Users interact through a command line, specifying the
              puzzle file and desired approach. This project offers valuable
              insights into optimization techniques.
            </p>
          </ProjectItem>
          <ProjectItem
            date="June 2023"
            status="default"
            title="OCaml Interpreter for a stack based language inspired by PostScript"
            link="https://github.com/baptisteauduge/interpreter-pf2023"
            tags={[
              'OCaml',
              'Interpreter',
              'Functional Programming',
              'Stack Based Language',
              'PostScript',
            ]}
          >
            <p>
              I built a stack-based programming language, PF23, inspired by
              PostScript. This user-friendly language prioritizes simplicity and
              ease of use. It operates on a stack, manipulating data like
              numbers and booleans. Programs consist of operators, functions,
              and conditional statements, forming a readable sequence. Operators
              perform basic arithmetic and comparisons, while functions offer
              reusable code blocks. Conditional statements enable
              decision-making within the program. Our OCaml interpreter reads
              and executes PF23 programs, providing a platform for
              experimentation and learning.{' '}
            </p>
          </ProjectItem>
          <ProjectItem
            date="February 2024"
            status="default"
            title="Vigenère Cipher Cracker using Index of Coincidence, Index of Coincidence Mutual and Pearson Correlation Coefficient in Python"
            link="https://github.com/baptisteauduge/vigenere-cipher-crack"
            tags={['Cryptography', 'Python', 'Algorithms', 'Cybersecurity']}
          >
            <p>
              This project delves into the Vigenère Cipher, a classic encryption
              method, implemented in Python. We explored its polyalphabetic
              substitution technique, where a keyword determines ciphertext
              shifts. But the fun doesn't stop there! We also cracked the code
              using advanced methods like the Index of Coincidence (IC), Index
              of Coincidence Mutual (ICM), and Pearson Correlation Coefficient.
              This project, born from the "Cryptography" course (3I024) at
              Sorbonne University, offers a practical exploration of encryption
              and decryption.
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
