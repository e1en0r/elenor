import React from 'react';

export interface AsTypeAProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function AsTypeA({ children, ...props }: AsTypeAProps): React.ReactElement<AsTypeAProps, 'a'> {
  return <a {...props}>{children}</a>;
}

export interface AsTypeDivProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function AsTypeDiv({ children, ...props }: AsTypeDivProps): React.ReactElement<AsTypeDivProps, 'div'> {
  return <div {...props}>{children}</div>;
}
