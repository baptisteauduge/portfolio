import type { ReactNode } from 'react';
import styles from './Section.module.css';

type Props = {
  id?: string;
  labelledBy: string;
  children: ReactNode;
};

/** A top-level page section with the shared bottom spacing. */
export function Section({ id, labelledBy, children }: Props) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={styles.section}>
      {children}
    </section>
  );
}
