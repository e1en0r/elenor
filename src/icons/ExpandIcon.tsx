import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SvgIconProps, useIconSize } from '@phork/phorkit';

export function ExpandIcon({ title, titleId = uuid(), ...initProps }: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby={titleId} {...props}>
      {title === undefined ? (
        <title id={titleId}>{'Expand'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        fill="currentColor"
        d="M74.3 56.1L50 80.4 25.7 56.1l-9.8 9.8 24.3 24.3L50 100l9.8-9.8 24.3-24.3-9.8-9.8zM74.3 43.9L50 19.6 25.7 43.9l-9.8-9.8L40.2 9.8 50 0l9.8 9.8 24.3 24.3-9.8 9.8z"
      />
    </svg>
  );
}

ExpandIcon.displayName = 'ExpandIcon';
