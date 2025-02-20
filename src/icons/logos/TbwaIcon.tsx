import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SvgIconProps, useIconSize } from '@phork/phorkit';

export function TbwaIcon({ title, titleId = uuid(), ...initProps }: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby={titleId} {...props}>
      {title === undefined ? (
        <title id={titleId}>{'TBWA Chiat Day'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path fill="currentColor" d="M73 88.4H62.2L27.1 11.3h10.5z" />
    </svg>
  );
}

TbwaIcon.displayName = 'TbwaIcon';
