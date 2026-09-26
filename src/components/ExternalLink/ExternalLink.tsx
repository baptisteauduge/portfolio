import type { ComponentPropsWithoutRef } from 'react';

type Props = Omit<ComponentPropsWithoutRef<'a'>, 'target'>;

/** A link that opens in a new tab, as every off-site link in the design does. */
export function ExternalLink({ rel = 'noopener', ...props }: Props) {
  return <a target="_blank" rel={rel} {...props} />;
}
