import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SvgIconProps, useIconSize } from '@phork/phorkit';

export function LinkedinIcon({ title, titleId = uuid(), ...initProps }: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby={titleId} {...props}>
      {title === undefined ? (
        <title id={titleId}>{'LinkedIn'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        fill="currentColor"
        d="M0 88.9V11.1C0 5 5 0 11.1 0h77.8C95 0 100 5 100 11.1v77.8c0 6.1-5 11.1-11.1 11.1H11.1C5 100 0 95 0 88.9zm86.1-33.3c0-12.9-7.3-19.1-17.5-19.1s-14.5 7.9-14.5 7.9V38H39.8v48.1h14.3V60.8c0-6.7 3.1-10.8 9.1-10.8 5.4 0 8.1 3.9 8.1 10.8v25.3h14.8zM31.5 22.8c0-4.9-3.9-8.9-8.8-8.9s-8.8 4-8.8 8.9 3.9 8.8 8.8 8.8 8.8-3.9 8.8-8.8zM15.3 86.1h14.9V37.9H15.3z"
      />
    </svg>
  );
}

LinkedinIcon.displayName = 'LinkedinIcon';
