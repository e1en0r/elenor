import { viewports } from 'config/viewports';

export const showMobileLayout = (width?: number): boolean => width !== undefined && width <= viewports.small.max;
export const showDesktopLayout = (width?: number): boolean => !width || width >= viewports.medium.min;

export const showPortraitLayout = (width?: number, height?: number): boolean | undefined =>
  width !== undefined && height !== undefined && width <= height;

export const showLandscapeLayout = (width?: number, height?: number): boolean | undefined =>
  width !== undefined && height !== undefined && width > height;
