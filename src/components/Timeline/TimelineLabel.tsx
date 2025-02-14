import {
  Paper,
  Rhythm,
  TimelineDividerItem,
  themes,
  TimelineDividerItemProps,
  useThemeId,
  Typography,
} from '@phork/phorkit';

type TimelineLabelProps = Pick<TimelineDividerItemProps, 'first' | 'last' | 'position' | 'width' | 'themeId'> & {
  children: React.ReactChild | React.ReactFragment;
};

export const TimelineLabel = ({
  children,
  position = 'left-center',
  themeId: initThemeId,
  ...props
}: TimelineLabelProps): JSX.Element => {
  const themeId = useThemeId(initThemeId);

  const style = {
    '--timeline-item-connector-color': themes[themeId]['primary-palette-border-color'],
    '--status-bubble-triangle-color': themes[themeId]['tertiary-palette-background-color'],
  } as React.CSSProperties;

  return (
    <TimelineDividerItem squared unbordered unthemed position={position} style={style} triangleSize={8} {...props}>
      <Paper color="tertiary">
        <Rhythm p={3}>
          <Typography<'div'> align="center" as="div" size="xlarge" weight="bold">
            {children}
          </Typography>
        </Rhythm>
      </Paper>
    </TimelineDividerItem>
  );
};

TimelineLabel.displayName = 'TimelineLabel';
