import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SvgIconProps, useIconSize } from '@phork/phorkit';

export function CollapseIcon({ title, titleId = uuid(), ...initProps }: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby={titleId} {...props}>
      {title === undefined ? (
        <title id={titleId}>{'Collapse'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        fill="currentColor"
        d="M74.3 100L50 75.6 25.7 100l-9.8-9.8 24.3-24.4 9.8-9.7 9.8 9.8 24.3 24.3-9.8 9.8zM74.3 0L50 24.4 25.7 0l-9.8 9.8 24.3 24.4 9.8 9.7 9.8-9.8L84.1 9.8 74.3 0z"
      />
    </svg>
  );
}

CollapseIcon.displayName = 'CollapseIcon';
