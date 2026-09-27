import type { Fact } from '@/content/content';
import { Variant } from '@/components/Variant/Variant';
import styles from './FactList.module.css';

type Props = {
  facts: Fact[];
  variant: 'hero' | 'featured';
};

/**
 * The ruled term/detail grids in the hero and the Orano highlight. On phones
 * the hero one becomes rows and the Orano one a hairline grid.
 */
export function FactList({ facts, variant }: Props) {
  return (
    <dl className={`${styles.list} ${styles[variant]}`}>
      {facts.map((fact) => (
        <div key={fact.term} className={styles.item}>
          <dt className={styles.term}>
            <Variant desktop={fact.term} mobile={fact.termShort} />
          </dt>
          <dd className={styles.detail}>
            <Variant desktop={fact.detail} mobile={fact.detailShort} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
