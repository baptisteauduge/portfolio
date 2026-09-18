import React from 'react';

/**
 * Tracks the pointer and writes its position straight to the given element as
 * the --cursor-x / --cursor-y custom properties.
 *
 * Deliberately not React state: the position used to live at the top of the
 * tree, so every mousemove reconciled the whole page. Writing CSS variables on
 * a ref, coalesced into one animation frame, keeps the gradient identical while
 * doing no React work at all.
 *
 * Users who ask for reduced motion get no pointer tracking; the gradient stays
 * wherever the stylesheet parks it by default.
 */
export const useSetCursorPosition = (
  targetRef: React.RefObject<HTMLElement>,
) => {
  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReducedMotion) return;

    let frame = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const target = targetRef.current;
        if (!target) return;
        target.style.setProperty('--cursor-x', `${event.clientX}px`);
        target.style.setProperty('--cursor-y', `${event.clientY}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [targetRef]);
};
