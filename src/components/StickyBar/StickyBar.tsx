'use client';

import { useEffect, useState } from 'react';
import styles from './StickyBar.module.css';

type Props = {
  email: { label: string; href: string };
  resume: { label: string; href: string };
  /** id of the hero's buttons: the bar shows once they have scrolled away. */
  heroActionsId: string;
  /** id of the Contact section: the bar hides while it is in view. */
  contactId: string;
};

/**
 * The phone contact bar, fixed to the bottom of the screen between the hero
 * and Contact, so the email and resume buttons are never far. It is hidden
 * from 640px up, and while the menu is open (CSS).
 */
export function StickyBar({ email, resume, heroActionsId, contactId }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroActions = document.getElementById(heroActionsId);
    const contact = document.getElementById(contactId);
    if (!heroActions || !contact) return;

    let pastHero = false;
    let atContact = false;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === heroActions) {
            pastHero =
              !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
          } else {
            atContact = entry.isIntersecting;
          }
        }
        setVisible(pastHero && !atContact);
      },
      // Leave out the 56px sticky header.
      { rootMargin: '-56px 0px 0px 0px' },
    );
    observer.observe(heroActions);
    observer.observe(contact);
    return () => observer.disconnect();
  }, [heroActionsId, contactId]);

  return (
    <div className={visible ? `${styles.bar} ${styles.visible}` : styles.bar}>
      <a href={email.href} className={styles.email}>
        {email.label}
      </a>
      <a
        href={resume.href}
        target="_blank"
        rel="noopener"
        className={styles.resume}
      >
        {resume.label}
      </a>
    </div>
  );
}
