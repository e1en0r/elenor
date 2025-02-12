import styled from '@emotion/styled';
import React from 'react';
import {
  Flex,
  Paper,
  Rhythm,
  SvgIconProps,
  TagGroup,
  TagGroupItem,
  themes,
  TimelineMarkerItem,
  TimelineMarkerItemProps,
  TimelinePlainItem,
  Typography,
  useThemeId,
} from '@phork/phorkit';

export const LogoContainer = styled.div<{ backgroundColor: string; color: string }>`
  background: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  width: 100px;
  min-height: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
`;

export const Ribbon = styled.div<{ backgroundColor: string }>`
  background: ${({ backgroundColor }) => backgroundColor};
  display: block;
  padding: 4px;
  position: absolute;
  right: 0;
  text-align: center;
  text-decoration: none;
  top: 34px;
  transform: rotate(45deg) translate(18%, -164%);
  width: 120px;
  z-index: 100;
`;

export type TimelineItemProps = Pick<TimelineMarkerItemProps, 'first' | 'last' | 'position' | 'width' | 'themeId'> & {
  backgroundColor: string;
  children?: React.ReactChild | React.ReactFragment;
  company?: string;
  contract?: boolean;
  expanded?: boolean;
  jobTitle: string;
  logoColor: string;
  Logo: React.FC<SvgIconProps>;
  tags?: TagGroupItem[];
};

export const TimelineItem = ({
  backgroundColor,
  children,
  company,
  contract,
  expanded,
  first,
  last,
  jobTitle,
  logoColor,
  Logo,
  position = 'right-center',
  tags,
  themeId: initThemeId,
  width,
}: TimelineItemProps): JSX.Element => {
  const themeId = useThemeId(initThemeId);

  const style = {
    '--timeline-item-connector-color': themes[themeId]['primary-palette-border-color'],
    '--timeline-item-state-color': backgroundColor,
    '--status-bubble-triangle-color': backgroundColor,
    flex: 1,
  } as React.CSSProperties;

  return (
    <>
      <TimelineMarkerItem
        squared
        unbordered
        unthemed
        first={first}
        last={last}
        position={position}
        style={style}
        triangleSize={8}
        width={width}
      >
        <Paper color="tertiary">
          <GridContainer>
            <LogoContainer backgroundColor={backgroundColor} color={logoColor}>
              <Logo width={50} />
            </LogoContainer>
            <Rhythm mx={5} py={2}>
              <Flex alignSelf="stretch" direction="column" justifyContent="center">
                <Rhythm mr={contract ? 14 : 0}>
                  <div>
                    {company && <Typography variants="medium-caps">{company} - </Typography>}
                    {jobTitle}
                  </div>
                </Rhythm>
                {tags && (
                  <Rhythm mt={2}>
                    <TagGroup shape="pill" size="xsmall" tags={tags} weight="shaded" />
                  </Rhythm>
                )}
              </Flex>

              {contract && (
                <Ribbon backgroundColor={themes[themeId]['primary-palette-quietest-color']}>
                  <Typography variants="xsmall-caps">Contract</Typography>
                </Ribbon>
              )}
            </Rhythm>
          </GridContainer>
        </Paper>
      </TimelineMarkerItem>

      {children && expanded && (
        <TimelinePlainItem
          squared
          unbordered
          unthemed
          first={last}
          last={last}
          position={position}
          style={
            {
              ...style,
              '--timeline-item-spacing': '0px',
            } as React.CSSProperties
          }
          triangleSize={0}
          width={width}
        >
          <Paper color="secondary">{children}</Paper>
        </TimelinePlainItem>
      )}
    </>
  );
};

TimelineItem.displayName = 'TimelineItem';
