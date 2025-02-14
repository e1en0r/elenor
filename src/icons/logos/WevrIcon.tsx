import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SvgIconProps, useIconSize } from '@phork/phorkit';

export function WevrIcon({ title, titleId = uuid(), ...initProps }: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby={titleId} {...props}>
      {title === undefined ? <title id={titleId}>{'Wevr'}</title> : title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M34.2 64.1h-5.3l-6.2-19.2-.6-1.9-.4 1.9-6.3 19.2H10L0 34.2h5.5l6.8 20.4.6 2.2.4-2.2 6.5-20.4h4.6L31 54.6l.4 2.2.5-2.2 6.9-20.4h5.4zm29.6-11v1.8h-17c.3 3.4 2.8 5.6 6.4 5.6 2.8 0 4.8-1 5.6-3h4.8c-1.4 4.5-5 7.1-10.5 7.1-6.6 0-11.4-4.4-11.4-11.2 0-6.5 4.6-11.3 11.4-11.3 6.1 0 10.7 3.6 10.7 11zm-16.9-1.8h12c-.1-3.2-2.4-5.3-5.8-5.3-3.6-.1-5.9 2.2-6.2 5.3zm30.7 12.8h-4.9L64 42.5h5.3l5.3 14.4.5 1.8.5-1.8L81 42.5h5.3zm22.2-17.2c-1.9 0-3.3.3-4.7 1.4-1.2.9-2 2.4-2 4.5V64h-4.9V42.5h4.3l.4 3.7c.8-2 2.9-3.9 6.9-3.9z"
      />
    </svg>
  );
}

WevrIcon.displayName = 'WevrIcon';
