import type { Fact } from '@/content/content';
import styles from './FactList.module.css';

type Props = {
  facts: Fact[];
  variant: 'hero' | 'featured';
};

/** The ruled term/detail grids in the hero and the Orano highlight. */
export function FactList({ facts, variant }: Props) {
  return (
    <dl className={`${styles.list} ${styles[variant]}`}>
      {facts.map((fact) => (
        <div key={fact.term} className={styles.item}>
          <dt className={styles.term}>{fact.term}</dt>
          <dd className={styles.detail}>{fact.detail}</dd>
        </div>
      ))}
    </dl>
  );
}
