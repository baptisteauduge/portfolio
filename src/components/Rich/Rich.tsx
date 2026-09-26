import { Fragment } from 'react';
import type { Rich as RichValue } from '@/content/content';
import { ExternalLink } from '@/components/ExternalLink/ExternalLink';

/** Renders content text that may carry italics, links or line breaks. */
export function Rich({ value }: { value: RichValue }) {
  if (typeof value === 'string') return value;

  return value.map((part, i) => {
    if (typeof part === 'string') return <Fragment key={i}>{part}</Fragment>;
    if ('em' in part) return <i key={i}>{part.em}</i>;
    if ('br' in part) return <br key={i} />;
    return (
      <ExternalLink key={i} href={part.href}>
        {part.link}
      </ExternalLink>
    );
  });
}
