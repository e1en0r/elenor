import { config } from '@phork/phorkit';

export type Viewports = {
 '2xsmall': { max: number },
 xsmall: { min: number, max: number },
 small: { min: number, max: number },
 medium: { min: number, max: number },
 large: { min: number, max: number },
 xlarge: { min: number, max: number },
 '2xlarge': { min: number },
}

export const viewports: Viewports = {
  '2xsmall': config['viewport-2xsmall'] as Viewports['2xsmall'],
  xsmall: config['viewport-xsmall'] as Viewports['xsmall'],
  small: config['viewport-small'] as Viewports['small'],
  medium: config['viewport-medium'] as Viewports['medium'],
  large: config['viewport-large'] as Viewports['large'],
  xlarge: config['viewport-xlarge'] as Viewports['xlarge'],
  '2xlarge': config['viewport-2xlarge'] as Viewports['2xlarge'],
}

export type ViewportKey = keyof Viewports;
