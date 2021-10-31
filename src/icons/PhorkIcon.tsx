import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SvgIconProps, useIconSize } from '@phork/phorkit';

export function PhorkIcon({ title, titleId = uuid(), ...initProps }: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" aria-labelledby={titleId} {...props}>
      {title === undefined ? <title id={titleId}>{'phork'}</title> : title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <linearGradient id="prefix__a" gradientUnits="userSpaceOnUse" x1={399.738} y1={32.595} x2={1} y2={367.177}>
          <stop offset={0} stopColor="#ff3232" />
          <stop offset={1} stopColor="#f41150" />
        </linearGradient>
        <linearGradient id="prefix__b" gradientUnits="userSpaceOnUse" x1={76} y1={54.764} x2={399.738} y2={378.502}>
          <stop offset={0} stopColor="#ff3232" />
          <stop offset={1} stopColor="#ff6020" />
        </linearGradient>
        <linearGradient id="prefix__c" gradientUnits="userSpaceOnUse" x1={142} y1={92.885} x2={399.738} y2={350.623}>
          <stop offset={0} stopColor="#ff8e0d" />
          <stop offset={0.74} stopColor="#fca60a" />
        </linearGradient>
        <linearGradient id="prefix__d" gradientUnits="userSpaceOnUse" x1={1} y1={161.937} x2={366.295} y2={161.937}>
          <stop offset={0} stopColor="#ff8e0d" />
          <stop offset={1} stopColor="#ff6020" />
        </linearGradient>
        <linearGradient id="prefix__e" gradientUnits="userSpaceOnUse" x1={310.843} y1={257} x2={45.617} y2={0.874}>
          <stop offset={0} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
      <path
        d="M258.74 323.19c-27.23 40.43-67.34 72.89-113.57 75.71l-105.12-.05c-24.72-.03-39.46-13.16-38.93-43.9L1 254.73c2.09-46.96 36.4-84.98 75.71-113.57L273 4.42c15.8-11 33.2 6 18.2 18-34.63 27.71-168.87 149.62-168.87 149.62-12.33 11.66 3 26.33 14.67 15.33L307.2 38.42c15-12 31.8 5.2 17.8 18.13L168 216.7c-12.33 13 2.67 27.34 15 15 14.01-14.01 160.99-157.84 161.17-158.02 13-12.35 30.46 4.94 17.66 18.34 0 0-147.33 168.13-147.83 168.68-12.33 13.67 2.67 29.67 14.33 16.67 0 0 149.31-169.31 149.5-169.52 12.5-14 29.17 3.17 18.5 17.19L258.74 323.19z"
        fill="url(#prefix__a)"
      />
      <path
        d="M258.74 323.19c-27.23 40.43-67.34 72.89-113.57 75.71h-5.48C101.22 372.73 76 328.61 76 278.5c0-44.47 19.87-84.24 51.23-110.91l-4.9 4.45c-12.33 11.66 3 26.33 14.67 15.33L307.2 38.42c15-12 31.8 5.2 17.8 18.13L168 216.7c-12.33 13 2.67 27.34 15 15 14.01-14.01 160.99-157.84 161.17-158.02 13-12.35 30.46 4.94 17.66 18.34 0 0-147.33 168.13-147.83 168.68-12.33 13.67 2.67 29.67 14.33 16.67 0 0 149.31-169.31 149.5-169.52 12.5-14 29.17 3.17 18.5 17.19L258.74 323.19z"
        fill="url(#prefix__b)"
      />
      <path
        d="M258.74 323.19c-13.25 19.67-29.55 37.46-48.12 50.86C170.91 362.29 142 325.57 142 282c0-29.11 12.9-55.16 33.31-72.76L168 216.7c-12.33 13 2.67 27.34 15 15 14.01-14.01 160.99-157.84 161.17-158.02 13-12.35 30.46 4.94 17.66 18.34 0 0-147.33 168.13-147.83 168.68-12.33 13.67 2.67 29.67 14.33 16.67 0 0 149.31-169.31 149.5-169.52 12.5-14 29.17 3.17 18.5 17.19L258.74 323.19z"
        fill="url(#prefix__c)"
      />
      <path
        d="M1 254.73c2.09-46.96 36.4-84.98 75.71-113.57L273 4.42c15.8-11 33.2 6 18.2 18-34.63 27.71-168.87 149.62-168.87 149.62-12.33 11.66 3 26.33 14.67 15.33L307.2 38.42c15-12 31.8 5.2 17.8 18.13L168 216.7c-12.33 13 2.67 27.34 15 15 14.01-14.01 160.99-157.84 161.17-158.02 13-12.35 30.46 4.94 17.66 18.34 0 0-147.33 168.13-147.83 168.68-10.82 11.99-.61 25.77 9.94 20.21C197.66 306.94 161.48 323 121.5 323c-50.17 0-94.35-25.29-120.49-63.83L1 254.73z"
        opacity={0.4}
        fill="url(#prefix__d)"
      />
      <path
        d="M76.71 141.16L273 4.42c15.8-11 33.2 6 18.2 18-34.63 27.71-168.87 149.62-168.87 149.62-12.33 11.66 3 26.33 14.67 15.33L307.2 38.42c15-12 31.8 5.2 17.8 18.13L168 216.7c-11.76 12.4 1.34 26.01 13.27 16.55C164.39 248.04 142.26 257 118 257c-43.25 0-79.74-28.47-91.78-67.73 13.6-18.21 31.46-34.26 50.49-48.11zm106.37 90.46c1.02-1.01 2.69-2.67 4.92-4.87a94.163 94.163 0 01-4.92 4.87z"
        opacity={0.1}
        fill="url(#prefix__e)"
      />
    </svg>
  );
}

PhorkIcon.displayName = 'PhorkIcon';
