import styled from '@emotion/styled';
import { ThemeProps, Timeline as ColumnTimeline, StraddledTimeline, useThemeId } from '@phork/phorkit';
import { TimelineContent } from 'components/Timeline/TimelineContent';

type TimelineProps = Pick<ThemeProps, 'themeId'> & {
  expanded?: boolean;
  isStraddled?: boolean;
  width?: number;
};

const StyledStraddledTimeline = styled(StraddledTimeline)`
  font-size: 14px;
  letter-spacing: 1.2px;
`;

const StyledColumnedTimeline = styled(ColumnTimeline)`
  font-size: 14px;
  letter-spacing: 1.2px;
`;

export const Timeline = ({ expanded, isStraddled, themeId: initThemeId, width = 800 }: TimelineProps): JSX.Element => {
  const themeId = useThemeId(initThemeId);
  const leftWidth = isStraddled ? 150 : 0;
  const rightWidth = width - leftWidth;

  const labelWidth = leftWidth || rightWidth;
  const labelPosition = leftWidth ? 'left-center' : 'right-center';

  const itemWidth = rightWidth;
  const itemPosition = 'right-center';

  return isStraddled ? (
    <StyledStraddledTimeline leftWidth={leftWidth} rightWidth={rightWidth} spacing="cozy">
      <TimelineContent
        expanded={expanded}
        itemPosition={itemPosition}
        itemWidth={itemWidth}
        labelPosition={labelPosition}
        labelWidth={labelWidth}
        themeId={themeId}
      />
    </StyledStraddledTimeline>
  ) : (
    <StyledColumnedTimeline spacing="cozy">
      <TimelineContent
        expanded={expanded}
        itemPosition={itemPosition}
        itemWidth={itemWidth}
        labelPosition={labelPosition}
        labelWidth={labelWidth}
        themeId={themeId}
      />
    </StyledColumnedTimeline>
  );
};

Timeline.displayName = 'Timeline';
