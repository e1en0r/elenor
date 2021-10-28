import { viewports } from 'constants/viewports';
import {
  PAPER_TOP_OFFSET,
  PAPER_SIDE_OFFSET,
  SMALL_PAPER_TOP_OFFSET,
  SMALL_PAPER_SIDE_OFFSET,
  MIN_GRID_WIDTH,
} from '../constants/sizes';

export const showMobileLayout = (width?: number): boolean => width !== undefined && width <= viewports.small.max;
export const showDesktopLayout = (width?: number): boolean => !width || width >= viewports.medium.min;

export const showFullWidthCards = (width?: number): boolean => width !== undefined && width <= MIN_GRID_WIDTH;
export const showFullPageCards = (width?: number): boolean => width !== undefined && width >= viewports.xsmall.min;
export const showVerticalPage = showMobileLayout;

export const getPaperTopOffset = (width: number): number =>
  width <= viewports.small.max ? SMALL_PAPER_TOP_OFFSET : PAPER_TOP_OFFSET;

export const getPaperSideOffset = (width: number): number =>
  width <= viewports.small.max ? SMALL_PAPER_SIDE_OFFSET : PAPER_SIDE_OFFSET;
