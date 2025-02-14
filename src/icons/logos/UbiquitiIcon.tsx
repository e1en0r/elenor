import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SvgIconProps, useIconSize } from '@phork/phorkit';

export function UbiquitiIcon({ title, titleId = uuid(), ...initProps }: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby={titleId} {...props}>
      {title === undefined ? (
        <title id={titleId}>{'Ubiquiti'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        fill="currentColor"
        d="M96.1.6H90v6.2h6.1zM74.6 43.7V31.3h12.3v12.3h12.3c.2 11.4-.7 21.4-6.5 31.3-16.7 29.5-58.1 33.5-80.1 7.6C7.4 76.6 3.8 69.3 2 61.6c-.8-4.2-1.2-9.5-1.2-14V1.4h24.6v46.8c.1 6.1 1.2 12.3 4.9 17.1 10.4 14.1 32.5 12.8 41-2.6 3.1-5.1 3.4-13.3 3.3-19zm3.1-33.9h9.2V19h12.3v12.3H86.9V19h-9.2V9.8z"
      />
    </svg>
  );
}

UbiquitiIcon.displayName = 'UbiquitiIcon';
