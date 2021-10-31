import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SvgIconProps, useIconSize } from '@phork/phorkit';

export function TwitterIcon({ title, titleId = uuid(), ...initProps }: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-labelledby={titleId} {...props}>
      {title === undefined ? (
        <title id={titleId}>{'Twitter'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        fill="currentColor"
        d="M512 103.96c-.08.12-36.14 49.56-48.84 66.52-6.35 8.48-9.52 19.52-8.93 31.08 3.91 76.4-14.89 149.82-72.2 201.44-68.04 61.27-169.11 72.74-258.87 58.66-40.39-6.34-81.26-27.46-92.82-33.78L0 411.29l32.84-10.79c35.9-11.81 57.74-19.13 84.78-30.61-27.07-13.1-47.93-36.69-57.98-67.17L52 279.52l6.27.96A113.572 113.572 0 0144 262.89c-12.93-19.64-19.78-43.65-18.32-64.22l1.43-20.24 12.12 4.69c-5.11-9.66-8.8-19.97-10.98-30.78-5.29-26.36-.86-54.36 12.48-78.85l10.56-19.38 14.12 16.96c44.66 53.65 101.23 85.47 168.36 94.79-6.17-42.57 12.34-78.98 46.84-100.19 42.12-25.89 101.05-24.32 140.69 11.31 15.09-3.92 74.63-25.82 74.63-25.82l-19.07 54.47c3.64-.3 2.93-.18 35.14-1.67zm-61.48 33.37l-16.52-.01 12.94-36.94c-6.21 2.21-12.56 4.25-20.3 6.17-8.61 2.14-17.82-.33-24.63-6.59-31.52-29.03-77.03-26.38-105.71-8.76-13.72 8.44-44.16 33.37-30.27 82.46.63 2.2.69 2.26 3.08 25.44-10.85-2.51-118.57 4.64-210.32-90.53-8.64 33.12 3.14 67.57 32.54 90.5l40.8 31.83-51.5-5.1c-10.49-1.03-16.99-2.1-22.57-3.6 2.1 7.7 5.61 16.05 10.97 24.21 8.17 12.4 23.58 28.58 50.61 35.2l55.64 13.62-55.17 15.37c-7.24 2.02-14.5 3.24-22.03 3.67 14.19 21.81 37.26 35.24 64.97 37.01l57.85 3.7-52.4 24.81c-37.53 17.76-60.77 26.99-90.87 37.35 14.85 6.09 32.8 12.18 50.17 14.91 95.9 15.04 181.25-3.67 234.17-51.33 45.3-40.79 66.27-100.56 62.33-177.63-.94-18.54 4.33-36.51 14.87-50.57 4.49-6 8.23-11.01 11.35-15.19z"
      />
    </svg>
  );
}

TwitterIcon.displayName = 'TwitterIcon';
