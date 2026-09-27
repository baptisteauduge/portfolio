'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import styles from './MobileMenu.module.css';

type Props = {
  items: { label: string; href: string }[];
  navLabel: string;
  openLabel: string;
  closeLabel: string;
  /** Shown at the bottom of the sheet (the profile icons). */
  footer: ReactNode;
};

const WIDE = '(min-width: 640px)';

/**
 * The phone navigation: a Menu button that opens a full-height sheet of
 * section links. Hidden from 640px up, where the header shows its inline nav.
 */
export function MobileMenu({
  items,
  navLabel,
  openLabel,
  closeLabel,
  footer,
}: Props) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    setPageLocked(true);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    // Rotating to a wide layout hides the button, so close the sheet too.
    const wide = window.matchMedia(WIDE);
    const onWide = () => {
      if (wide.matches) setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    wide.addEventListener('change', onWide);
    return () => {
      setPageLocked(false);
      document.removeEventListener('keydown', onKeyDown);
      wide.removeEventListener('change', onWide);
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className={styles.button}
        aria-expanded={open}
        aria-controls="menu"
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        {open ? closeLabel : openLabel}
        <span aria-hidden="true" className={styles.burger} />
      </button>
      <nav
        id="menu"
        aria-label={navLabel}
        className={open ? `${styles.sheet} ${styles.open}` : styles.sheet}
      >
        {items.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.item}
            onClick={() => {
              // Unlock before the browser follows the link, so it can scroll.
              setPageLocked(false);
              setOpen(false);
            }}
          >
            <span>{item.label}</span>
            <span aria-hidden="true" className={styles.index}>
              {String(i + 1).padStart(2, '0')}
            </span>
          </a>
        ))}
        <div className={styles.footer}>{footer}</div>
      </nav>
    </>
  );
}

/**
 * While the sheet is open, the page behind it neither scrolls nor takes
 * focus. The data attribute also hides the sticky contact bar (CSS).
 */
function setPageLocked(locked: boolean) {
  document.documentElement.toggleAttribute('data-menu-open', locked);
  for (const id of ['main', 'contact']) {
    document.getElementById(id)?.toggleAttribute('inert', locked);
  }
}
