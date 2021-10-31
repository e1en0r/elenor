import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SvgIconProps, useIconSize } from '@phork/phorkit';

export function EmailIcon({ title, titleId = uuid(), ...initProps }: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-labelledby={titleId} {...props}>
      {title === undefined ? <title id={titleId}>{'Email'}</title> : title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M46.3 31.7c-1.3 3.5-4.6 5.9-8.4 5.9-3.6 0-6.7-2.3-8.1-5.4-1.9 1.6-4.3 2.6-7 2.6-6 0-10.8-4.9-10.8-10.8s4.9-10.8 10.8-10.7c2.4 0 4.5.7 6.3 2v-.7c0-1.3 1-2.3 2.3-2.3 1.3 0 2.3 1.1 2.3 2.3v14.1c0 2.4 1.9 4.3 4.3 4.3 1.9 0 3.5-1.2 4.1-2.9.8-2.3 1.1-4.8 1-7.3-.5-9.3-7.8-16.9-17-17.8-5.8-.5-11.3 1.4-15.4 5.5s-6.1 9.7-5.5 15.4c.9 9 8 16.1 17 17 4.4.4 8.7-.6 12.4-3.1 1-.7 2.4-.4 3.1.6.7 1 .4 2.4-.6 3.1-3.9 2.7-8.3 4-13 4-.8 0-1.6 0-2.4-.1-11.1-1.1-20-9.9-21.1-21-.7-7.1 1.8-14 6.8-19S19.3-.1 26.4.6c11.4 1.2 20.4 10.6 21.1 22 .1 3.1-.3 6.1-1.2 9.1zM29.1 24c0-3.5-2.8-6.3-6.3-6.3s-6.3 2.8-6.3 6.3 2.8 6.3 6.3 6.3c3.4 0 6.3-2.8 6.3-6.3z"
      />
    </svg>
  );
}

EmailIcon.displayName = 'EmailIcon';
