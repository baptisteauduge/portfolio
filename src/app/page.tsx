import { SkipLink } from '@/components/SkipLink/SkipLink';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { Featured } from '@/components/Featured/Featured';
import { About } from '@/components/About/About';
import { Experience } from '@/components/Experience/Experience';
import { Projects } from '@/components/Projects/Projects';
import { Skills } from '@/components/Skills/Skills';
import { Footer } from '@/components/Footer/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" className={styles.main}>
        <Hero />
        <Featured />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
