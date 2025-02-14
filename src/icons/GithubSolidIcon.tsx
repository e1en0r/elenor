import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SvgIconProps, useIconSize } from '@phork/phorkit';

export function GithubSolidIcon({
  title,
  titleId = uuid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby={titleId} {...props}>
      {title === undefined ? (
        <title id={titleId}>{'GitHub'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        fill="currentColor"
        d="M37 96.9c0-1.6-.1-6.7-.1-12.1-16.3 3-20.6-4-21.9-7.7-.7-1.8-3.9-7.6-6.6-9.1-2.3-1.2-5.5-4.3-.1-4.3 5.1-.1 8.8 4.7 10 6.6 5.8 9.9 15.2 7.1 18.9 5.4.6-4.2 2.3-7.1 4.1-8.7-14.4-1.6-29.5-7.2-29.5-32.1 0-7.1 2.5-12.9 6.7-17.5-.7-1.6-3-8.2.6-17.2 0 0 5.4-1.7 17.9 6.7 5.2-1.5 10.7-2.2 16.2-2.2s11.1.7 16.3 2.2C81.9-1.5 87.3.2 87.3.2c3.6 9 1.3 15.6.7 17.2 4.1 4.6 6.6 10.4 6.6 17.5C94.6 59.8 79.4 65.4 65 67c2.3 2 4.4 5.9 4.4 12 0 8.7-.1 15.7-.1 17.9v1.6c0 .8-.7 1.5-1.5 1.5H38.5c-.9 0-1.6-.7-1.6-1.5v-1.1q.1-.3.1-.5z"
      />
    </svg>
  );
}

GithubSolidIcon.displayName = 'GithubSolidIcon';
