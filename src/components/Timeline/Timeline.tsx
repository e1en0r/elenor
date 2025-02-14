import styled from '@emotion/styled';
import { ThemeProps, Timeline as InlineTimeline, StraddledTimeline, useThemeId } from '@phork/phorkit';
import { TIMELINE_STRADDLED_LEFT_WIDTH } from 'config/sizes';
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

const StyledInlineTimeline = styled(InlineTimeline)`
  font-size: 14px;
  letter-spacing: 1.2px;
`;

export const Timeline = ({ expanded, isStraddled, themeId: initThemeId, width = 800 }: TimelineProps): JSX.Element => {
  const themeId = useThemeId(initThemeId);
  const leftWidth = isStraddled ? TIMELINE_STRADDLED_LEFT_WIDTH : 0;
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
    <StyledInlineTimeline spacing="cozy">
      <TimelineContent
        expanded={expanded}
        itemPosition={itemPosition}
        itemWidth={itemWidth}
        labelPosition={labelPosition}
        labelWidth={labelWidth}
        themeId={themeId}
      />
    </StyledInlineTimeline>
  );
};

Timeline.displayName = 'Timeline';
