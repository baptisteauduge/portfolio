import { Variant } from '@/components/Variant/Variant';
import styles from './SectionLabel.module.css';

type Props = {
  label: string;
  aside?: string;
  /** Phone wording, when it differs. */
  labelShort?: string;
  asideShort?: string;
  /** section: numbered section rule. featured: first rule of Featured. sub: lighter rule inside a section. */
  variant?: 'section' | 'featured' | 'sub';
};

/** The mono caption over a rule that opens each section, e.g. "02 — About". */
export function SectionLabel({
  label,
  aside,
  labelShort,
  asideShort,
  variant = 'section',
}: Props) {
  return (
    <div className={`${styles.label} ${styles[variant]}`}>
      <span>
        <Variant desktop={label} mobile={labelShort} />
      </span>
      {aside && (
        <span className={styles.aside}>
          <Variant desktop={aside} mobile={asideShort} />
        </span>
      )}
    </div>
  );
}
