import { viewports } from 'config/viewports';
import { PAPER_TOP_OFFSET, PAPER_SIDE_OFFSET, SMALL_PAPER_TOP_OFFSET, SMALL_PAPER_SIDE_OFFSET } from '../config/sizes';

export const showMobileLayout = (width?: number): boolean => width !== undefined && width <= viewports.small.max;
export const showDesktopLayout = (width?: number): boolean => !width || width >= viewports.medium.min;

export const getPaperTopOffset = (width: number): number =>
  width <= viewports.small.max ? SMALL_PAPER_TOP_OFFSET : PAPER_TOP_OFFSET;

export const getPaperSideOffset = (width: number): number =>
  width <= viewports.small.max ? SMALL_PAPER_SIDE_OFFSET : PAPER_SIDE_OFFSET;
