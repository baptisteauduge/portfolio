import { hero, site } from '@/content/content';
import { FactList } from '@/components/FactList/FactList';
import { ContactLinks } from '@/components/ContactLinks/ContactLinks';
import { Variant } from '@/components/Variant/Variant';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="top" aria-labelledby="name" className={styles.hero}>
      <p className={styles.eyebrow}>{hero.eyebrow}</p>
      <h1 id="name" className={styles.name}>
        {site.name}
      </h1>
      <p className={styles.lede}>
        <Variant desktop={hero.lede} mobile={hero.introShort} />
      </p>
      <FactList facts={hero.facts} variant="hero" />
      <ContactLinks variant="hero" id="hero-actions" />
    </section>
  );
}
