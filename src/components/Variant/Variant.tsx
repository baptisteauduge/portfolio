import type { ReactNode } from 'react';

type Props = {
  desktop: ReactNode;
  /** Shown instead of `desktop` below 640px. Omit when both layouts agree. */
  mobile?: ReactNode;
};

/**
 * Text that differs between the desktop and phone layouts. Both versions are
 * in the HTML and CSS shows one, so there is no layout shift or hydration
 * flash; the hidden one is display:none and skipped by screen readers.
 */
export function Variant({ desktop, mobile }: Props) {
  if (mobile === undefined || mobile === desktop) return desktop;
  return (
    <>
      <span className="desktop-only">{desktop}</span>
      <span className="mobile-only">{mobile}</span>
    </>
  );
}
