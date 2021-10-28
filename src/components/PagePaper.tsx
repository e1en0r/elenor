import styled from '@emotion/styled';
import { Paper, PaperProps } from '@phork/phorkit';
import { PAPER_TOP_OFFSET, PAPER_SIDE_OFFSET, SMALL_PAPER_TOP_OFFSET, SMALL_PAPER_SIDE_OFFSET } from 'constants/sizes';
import { viewports } from 'constants/viewports';

const ResponsivePaper = styled(Paper, {
  shouldForwardProp: prop => prop !== 'autoHeight',
})<{ autoHeight?: boolean }>`
  ${({ autoHeight }) => !autoHeight && 'min-height: 100%;'}

  background: transparent;
  padding: ${PAPER_TOP_OFFSET}px ${PAPER_SIDE_OFFSET}px 40px;

  @media (max-width: ${viewports.small.max}px) {
    padding: ${SMALL_PAPER_TOP_OFFSET}px ${SMALL_PAPER_SIDE_OFFSET}px;
  }
`;

export type PagePaperProps = PaperProps & {
  autoHeight?: boolean;
};

export function PagePaper({ children, ...props }: PagePaperProps): ReturnType<typeof ResponsivePaper> {
  return <ResponsivePaper {...props}>{children}</ResponsivePaper>;
}

PagePaper.displayName = 'PagePaper';
