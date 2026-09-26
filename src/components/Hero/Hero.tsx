import { hero } from '@/content/content';
import { FactList } from '@/components/FactList/FactList';
import { ContactLinks } from '@/components/ContactLinks/ContactLinks';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="top" aria-labelledby="name" className={styles.hero}>
      <p className={styles.eyebrow}>{hero.eyebrow}</p>
      <h1 id="name" className={styles.name}>
        {hero.name}
      </h1>
      <p className={styles.lede}>{hero.lede}</p>
      <FactList facts={hero.facts} variant="hero" />
      <ContactLinks variant="hero" />
    </section>
  );
}
