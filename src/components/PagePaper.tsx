import styled from '@emotion/styled';
import { Paper, PaperProps } from '@phork/phorkit';
import {
  PAPER_BOTTOM_OFFSET,
  PAPER_TOP_OFFSET,
  PAPER_SIDE_OFFSET,
  SMALL_PAPER_BOTTOM_OFFSET,
  SMALL_PAPER_TOP_OFFSET,
  SMALL_PAPER_SIDE_OFFSET,
  XLARGE_PAPER_BOTTOM_OFFSET,
  XLARGE_PAPER_SIDE_OFFSET,
  XLARGE_PAPER_TOP_OFFSET,
} from 'config/sizes';
import { viewports } from 'config/viewports';

type StyledPageProps = {
  autoHeight?: boolean;
  centered?: boolean;
  flexible?: boolean;
  spacing?: 'vertical' | 'horizontal';
};

export type PagePaperProps = PaperProps & StyledPageProps;

const getHorizontalOffset = (offset: number, spacing: StyledPageProps['spacing']): string =>
  !spacing || spacing === 'horizontal' ? `${offset}px` : '0';

const getVerticalOffset = (offset: number, spacing: StyledPageProps['spacing']): string =>
  !spacing || spacing === 'vertical' ? `${offset}px` : '0';

export const PagePaper = styled(Paper, {
  shouldForwardProp: (prop: string) => !['autoHeight', 'centered', 'flexible', 'spacing'].includes(prop),
})<StyledPageProps>`
  ${({ autoHeight }) => !autoHeight && 'min-height: 100%;'}
  ${({ centered }) => centered && `align-items: center; justify-content: center;`}
  ${({ flexible }) => flexible && 'display: flex;'}

  ${({ spacing }) => `
  background: transparent;
  padding: ${getVerticalOffset(PAPER_TOP_OFFSET, spacing)} ${getHorizontalOffset(
    PAPER_SIDE_OFFSET,
    spacing,
  )} ${getVerticalOffset(PAPER_BOTTOM_OFFSET, spacing)};

  @media (max-width: ${viewports.small.max}px) {
    padding: ${getVerticalOffset(SMALL_PAPER_TOP_OFFSET, spacing)} ${getHorizontalOffset(
    SMALL_PAPER_SIDE_OFFSET,
    spacing,
  )} ${getVerticalOffset(SMALL_PAPER_BOTTOM_OFFSET, spacing)};
  }

  @media (min-width: ${viewports.xlarge.min}px) {
    padding: ${getVerticalOffset(XLARGE_PAPER_TOP_OFFSET, spacing)} ${getHorizontalOffset(
    XLARGE_PAPER_SIDE_OFFSET,
    spacing,
  )} ${getVerticalOffset(XLARGE_PAPER_BOTTOM_OFFSET, spacing)};
  }
  `}
`;

PagePaper.displayName = 'PagePaper';
