import styles from './SectionLabel.module.css';

type Props = {
  label: string;
  aside?: string;
  /** section: numbered section rule. featured: first rule of Featured. sub: lighter rule inside a section. */
  variant?: 'section' | 'featured' | 'sub';
};

/** The mono caption over a rule that opens each section, e.g. "02 — About". */
export function SectionLabel({ label, aside, variant = 'section' }: Props) {
  return (
    <div className={`${styles.label} ${styles[variant]}`}>
      <span>{label}</span>
      {aside && <span className={styles.aside}>{aside}</span>}
    </div>
  );
}
