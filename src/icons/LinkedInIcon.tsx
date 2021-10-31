import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SvgIconProps, useIconSize } from '@phork/phorkit';

export function LinkedInIcon({ title, titleId = uuid(), ...initProps }: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 86" aria-labelledby={titleId} {...props}>
      {title === undefined ? (
        <title id={titleId}>{'LinkedIn'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        fill="currentColor"
        d="M24 12c0 6.6-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0s12 5.4 12 12zM4 12c0 4.44 3.56 8 8 8 4.44 0 8-3.56 8-8 0-4.44-3.56-8-8-8-4.44 0-8 3.56-8 8zm77.19 20.38C84.75 36.55 86 42.33 86 49v16c.01 1.06-.94 2.03-2 2.03s-2.01-.97-2-2.03V49c0-6.15-1.21-10.91-3.87-14.03C75.46 31.84 71.17 30 64 30c-7.5 0-11.08 4.06-14.44 8.25-.51.64-1.45.91-2.22.64C46.56 38.62 46 37.82 46 37v-5H34v50h13v-4h-1c-1.05.05-2.05-.86-2.09-1.91-.05-1.04.86-2.04 1.9-2.09H47v-4h-1c-1.05.05-2.05-.86-2.09-1.91-.05-1.04.86-2.04 1.9-2.09H47V54c0-3.34 1-6.48 2.72-8.87C51.44 42.73 54.01 41 57 41h2c2.99 0 5.56 1.73 7.28 4.13C68 47.52 69 50.66 69 54v28h13v-9c-.01-1.06.94-2.03 2-2.03s2.01.97 2 2.03v11c0 1.05-.95 2-2 2H67c-1.05 0-2-.95-2-2V54c0-2.53-.8-4.93-1.97-6.56C61.86 45.8 60.44 45 59 45h-2c-1.44 0-2.86.8-4.03 2.44C51.8 49.07 51 51.47 51 54v30c0 1.05-.95 2-2 2H32c-1.05 0-2-.95-2-2V30c0-1.05.95-2 2-2h16c1.05 0 2 .95 2 2v1.84C53.26 28.72 57.61 26 64 26c7.9 0 13.62 2.2 17.19 6.38zM21 28c1.05 0 2 .95 2 2v54c0 1.05-.95 2-2 2H4c-1.05 0-2-.95-2-2V30c0-.99.83-1.91 1.81-2H21zM6 82h13v-4h-1c-1.05.05-2.05-.86-2.09-1.91-.05-1.04.86-2.04 1.9-2.09H19v-4h-1c-1.05.05-2.05-.86-2.09-1.91-.05-1.04.86-2.04 1.9-2.09H19V32H6v50z"
      />
    </svg>
  );
}

LinkedInIcon.displayName = 'LinkedInIcon';
