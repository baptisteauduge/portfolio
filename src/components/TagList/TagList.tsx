import styles from './TagList.module.css';

type Props = {
  items: string[];
  /** role: under a main role. nested: under a freelance role. card: project card footer. chip: boxed skills. */
  variant: 'role' | 'nested' | 'card' | 'chip';
  label?: string;
};

export function TagList({ items, variant, label }: Props) {
  return (
    <ul aria-label={label} className={`${styles.list} ${styles[variant]}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
