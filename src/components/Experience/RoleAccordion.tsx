'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import styles from './Experience.module.css';

type State = { open: number; toggle: (index: number) => void };

const AccordionContext = createContext<State>({ open: -1, toggle: () => {} });

/**
 * Holds which role is open on phones: one at a time, -1 for none. From 640px
 * up every body shows and the toggles are hidden, so the state has no effect.
 */
export function RoleAccordion({
  defaultOpen,
  children,
}: {
  defaultOpen: number;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const toggle = (index: number) =>
    setOpen((current) => (current === index ? -1 : index));

  return (
    <AccordionContext.Provider value={{ open, toggle }}>
      {children}
    </AccordionContext.Provider>
  );
}

type ItemProps = {
  index: number;
  nested: boolean;
  /** id of the collapsible body, which is one of the children. */
  bodyId: string;
  /** Content of the phone toggle button. */
  head: ReactNode;
  children: ReactNode;
};

/** One role: its phone toggle, then the desktop markup it collapses. */
export function RoleItem({ index, nested, bodyId, head, children }: ItemProps) {
  const { open, toggle } = useContext(AccordionContext);
  const isOpen = open === index;
  const Heading = nested ? 'h4' : 'h3';

  return (
    <article
      className={nested ? styles.nestedRole : styles.role}
      data-open={isOpen}
    >
      <Heading className={styles.head}>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={isOpen}
          aria-controls={bodyId}
          onClick={() => toggle(index)}
        >
          {head}
          <span aria-hidden="true" className={styles.sign}>
            {isOpen ? '–' : '+'}
          </span>
        </button>
      </Heading>
      {children}
    </article>
  );
}
