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
          <h1 id="about">
            Bridging the Gap: Between Academia and Real-World Development
          </h1>
          <b>
            <FontAwesomeIcon icon={faRocket} />
            Driven by Curiosity, Fueled by Innovation
          </b>
          <p>
            From a young age, I've been fascinated by the way technology can
            solve problems and push boundaries. This passion led me to delve
            into the world of programming at the age of 12, and since then, I've
            continually honed my skills and explored diverse areas of computer
            science.
          </p>
          <b>
            <FontAwesomeIcon icon={faBook} />
            My Academic Journey
          </b>
          <p>
            Currently, I'm pursuing a Dual Bachelor's Degree in Mathematics and
            Computer Science at Sorbonne University, where I'm thriving in a
            rigorous academic environment. My studies have provided me with a
            deep understanding of theoretical foundations and practical
            problem-solving methodologies, which I actively apply in my work.
          </p>
          <b>
            <FontAwesomeIcon icon={faMicrochip} />
            Technical Expertise
          </b>
          <p>
            I have a strong command of various programming languages, including
            C, C++, Java, Python, TypeScript, and Web Development languages. My
            toolset extends beyond languages, encompassing frameworks and
            methodologies relevant to modern software development. I'm a quick
            learner and adept at adapting to new technologies, constantly
            expanding my knowledge base to tackle challenging projects.
          </p>
          <b>
            <FontAwesomeIcon icon={faUserTie} />
            Professional Experience
          </b>
          <p>
            While pursuing my academic journey, I've also gained practical
            experience through freelance development work. This has allowed me
            to collaborate with diverse clients, understand their needs, and
            translate them into effective web and mobile solutions. I'm
            passionate about working on projects with real-world impact, and my
            experience has equipped me with valuable skills in communication,
            collaboration, and project management.
          </p>
          <b>
            <FontAwesomeIcon icon={faHeart} />
            Areas of Interest
          </b>
          <p>
            My curiosity extends beyond technical expertise. I'm particularly
            interested in the potential of Artificial Intelligence,
            Cybersecurity, and Quantitative Finance, actively seeking
            opportunities to explore these fields through projects and research.
            I also believe in the power of interdisciplinary collaboration, and
            I'm always looking for ways to integrate my diverse interests into
            my work.
          </p>
          <b>
            <FontAwesomeIcon icon={faMusic} />
            Beyond the Code
          </b>
          <p>
            While I'm deeply passionate about technology, I value the importance
            of a well-rounded life. My interests extend beyond computer science,
            including music and sports, which I believe contribute to creativity
            and problem-solving in unexpected ways.
          </p>
          <b>
            <FontAwesomeIcon icon={faEye} />
            Looking Ahead
          </b>
          <p>
            I'm driven by a constant desire to learn, grow, and contribute
            meaningfully to the world. Whether it's pursuing a career in
            research, development, or entrepreneurship, I'm excited to leverage
            my skills and knowledge to tackle complex challenges and make a
            positive impact.
          </p>
        </div>
        <div ref={refExperiences} className="experiences-section">
          <h1 id="experiences">Professional Experiences</h1>
          <div className="experiences-container">
            <ExperienceItem
              beginYear="2023"
              endYear="PRESENT"
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
                    'Developed and launched 2 financial simulators using React and NestJS, leading to a 4% increase in conversion rates and generating qualified leads within a really competitive market. These simulators cover diverse aspects of the French tax system, including:',
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
              beginYear="2022"
              endYear="2023"
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
              beginYear="2020"
              endYear="2023"
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
          <div ref={refProjects} className="projects-section">
            <h1 id="projects">Projects</h1>
            <ProjectItem
              date="May 2023"
              status="default"
              title="Content based TV Show Recommendation Algorithm using NLP"
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
                Under the guidance of Nicolas Baskiotis, a researcher at LIP6,
                we delved into developing a content-based recommendation
                algorithm leveraging natural language processing (NLP).
                Utilizing publicly available data, we applied powerful tools
                like TF-IDF, K-Means, and Perceptron to uncover hidden patterns
                and connections within the content. This exploration aimed to
                determine the effectiveness of this approach in recommending TV
                shows, ultimately assessing its viability as a personalized
                recommendation method.
              </p>
            </ProjectItem>
            <ProjectItem
              date="April 2023"
              status="default"
              title="Git like version control system using C"
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
                I developed a miniature Git version control system in C,
                allowing users to manage local code repositories. Users can
                initialize repositories, create and switch between branches,
                stage and commit changes, explore past versions, and even merge
                branches. Built with modularity and clarity, this project
                provides a valuable learning experience in version control
                fundamentals.{' '}
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
                We built a Picross solver in C++, wielding dynamic programming
                and backtracking for efficient solutions. One approach
                prioritizes speed, tackling puzzles quickly, while another
                guarantees a solution, even for the trickiest ones. Both
                leverage an initial analysis, then the second employs a more
                exhaustive search if needed. Users interact through a command
                line, specifying the puzzle file and desired approach. This
                project offers valuable insights into optimization techniques.
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
                PostScript. This user-friendly language prioritizes simplicity
                and ease of use. It operates on a stack, manipulating data like
                numbers and booleans. Programs consist of operators, functions,
                and conditional statements, forming a readable sequence.
                Operators perform basic arithmetic and comparisons, while
                functions offer reusable code blocks. Conditional statements
                enable decision-making within the program. Our OCaml interpreter
                reads and executes PF23 programs, providing a platform for
                experimentation and learning.{' '}
              </p>
            </ProjectItem>
            <ProjectItem
              date="February 2024"
              status="default"
              title="Vigenère Cipher Cracker using Index of Coincidence, Index of Coincidence Mutual and Person Correlation Coefficient in Python"
              link="https://github.com/baptisteauduge/vigenere-cipher-crack"
              tags={['Cryptography', 'Python', 'Algorithms', 'Cybersecurity']}
            >
              <p>
                This project delves into the Vigenère Cipher, a classic
                encryption method, implemented in Python. We explored its
                polyalphabetic substitution technique, where a keyword
                determines ciphertext shifts. But the fun doesn't stop there! We
                also cracked the code using advanced methods like the Index of
                Coincidence (IC), Index of Coincidence Mutual (ICM), and Pearson
                Correlation Coefficient. This project, born from the
                "Cryptography" course (3I024) at Sorbonne University, offers a
                practical exploration of encryption and decryption.
              </p>
            </ProjectItem>
          </div>
          <br />
          <p className="credits">
            Crafted with ❤️ by Baptiste Audugé. Built using React and Vite for a
            smooth user experience, and deployed on Vercel for lightning-fast
            performance. This website's design is heavily influenced by the work
            of <i>Brittany Chiang</i> a skilled UI designer and Software
            Engineer.
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </main>
    </div>
  );
};
