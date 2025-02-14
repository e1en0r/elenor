import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SvgIconProps, useIconSize } from '@phork/phorkit';

export function BuzznetIcon({ title, titleId = uuid(), ...initProps }: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby={titleId} {...props}>
      {title === undefined ? (
        <title id={titleId}>{'Buzznet'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        fill="currentColor"
        d="M81.3 30.6l-24.9 2.3L77.3 0H38.7L16.8 57.1c-.2.6-.1 1.3.3 1.8.3.5 1 .7 1.6.7L44.6 57l-16 40.5c-.3.8 0 1.8.8 2.2q.5.3.9.3c.5 0 1.1-.3 1.4-.7l51.2-65.8c.4-.6.5-1.4.1-2-.3-.6-1-1-1.7-.9z"
      />
    </svg>
  );
}

BuzznetIcon.displayName = 'BuzznetIcon';
