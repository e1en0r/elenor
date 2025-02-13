import styled from '@emotion/styled';
import { memo, useCallback, useState } from 'react';
import { Flex, StyledIconButton, Rhythm, themes, useThemeId, Avatar } from '@phork/phorkit';
import { TIMELINE_GUTTER_WIDTH, TIMELINE_POINTER_SIZE, TIMELINE_STRADDLED_LEFT_WIDTH } from 'config/sizes';
import { viewports } from 'config/viewports';
import { Headline } from 'components/Headline';
import { Skills } from 'components/Skills/Skills';
import { Timeline } from 'components/Timeline';
import { ExpandIcon, CollapseIcon } from 'icons/index';

const COLUMN_BREAKPOINT = 1380;
const MAXIMUM_PFP_WIDTH = 400;
const GRID_GAP_WIDTH = 40;

const MINIMUM_TIMELINE_GUTTER = TIMELINE_GUTTER_WIDTH * 2;
const MAXIMUM_TIMELINE_WIDTH = 788;
const MINIMUM_TIMELINE_WIDTH = 350;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${GRID_GAP_WIDTH}px;
  width: 100%;

  @media (max-width: ${COLUMN_BREAKPOINT}px) {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled(Rhythm)`
  align-self: start;

  @media (max-width: ${COLUMN_BREAKPOINT}px) {
    justify-self: end;
  }

  @media (max-width: ${viewports.small.max}px) {
    justify-self: center;
  }
`;

const RightColumn = styled(Flex)`
  width: fit-content;
  justify-self: end;

  @media (max-width: ${viewports.small.max}px) {
    justify-self: center;
  }
`;

// this visually centers the avatar over the timeline and under the name
const AvatarContainer = styled(Flex)`
  margin-left: 84px;

  @media (max-width: ${COLUMN_BREAKPOINT}px) {
    margin-left: 0;
    margin-right: 110px;
  }

  @media (max-width: ${viewports.small.max}px) {
    margin-right: 0;
  }
`;

// this visually aligns the skills with the timeline content
const IndentedSkills = styled(Skills, {
  shouldForwardProp: prop => prop !== 'isTimelineStraddled',
})<{ isTimelineStraddled: boolean }>`
  padding-left: ${({ isTimelineStraddled }) =>
    isTimelineStraddled ? TIMELINE_STRADDLED_LEFT_WIDTH + TIMELINE_POINTER_SIZE * 2 : TIMELINE_GUTTER_WIDTH}px;
`;

export type ResumeContentProps = {
  alignRight?: boolean;
  width: number;
};

export const ResumeContent = memo(function ResumeContent({ alignRight, width }: ResumeContentProps) {
  const themeId = useThemeId();

  const isTimelineStraddled = !!alignRight;

  const timelineWidth = Math.max(
    MINIMUM_TIMELINE_WIDTH,
    Math.min(MAXIMUM_TIMELINE_WIDTH, width - MINIMUM_TIMELINE_GUTTER * 2),
  );

  const leftColumnWidth = width < COLUMN_BREAKPOINT ? undefined : width - timelineWidth;
  const pfpWidth = Math.min(
    MAXIMUM_PFP_WIDTH,
    leftColumnWidth ? leftColumnWidth / 2 : timelineWidth - (isTimelineStraddled ? TIMELINE_STRADDLED_LEFT_WIDTH : 0),
  );

  const [expandExperience, setExpandExperience] = useState(false);
  const ExperienceIcon = expandExperience ? CollapseIcon : ExpandIcon;

  const handleToggleExperience = useCallback(
    () => setExpandExperience(currentExpandExperience => !currentExpandExperience),
    [],
  );

  return (
    <GridLayout>
      <LeftColumn grouped mb={12} mt={4}>
        <AvatarContainer>
          <Avatar
            aria-label="Profile picture"
            color="neutral"
            imgSrc="/static/images/avatar.jpg"
            initials="EC"
            size="custom"
            style={
              {
                '--avatar-font-size': `${Math.round(pfpWidth / 4)}px`,
                '--avatar-size': `${pfpWidth}px`,
              } as React.CSSProperties
            }
          />
        </AvatarContainer>
      </LeftColumn>
      <RightColumn alignItems={alignRight ? 'flex-end' : 'center'} direction="column">
        <Rhythm mb={10}>
          <Flex alignItems="center" direction="row">
            <Rhythm mb={1} mr={2}>
              <StyledIconButton
                activePrimaryColor={themes[themeId]['primary-palette-quiet-color']}
                as="button"
                hoveredPrimaryColor={themes[themeId]['primary-palette-quiet-color']}
                inverseColor={themes[themeId]['primary-palette-background-color']}
                onClick={handleToggleExperience}
                primaryColor={themes[themeId]['primary-palette-text-color']}
                shape="circle"
                size={width && width < viewports.small.max ? 'xlarge' : '4xlarge'}
                weight="solid"
              >
                <ExperienceIcon size={width && width < viewports.small.max ? 24 : 32} />
              </StyledIconButton>{' '}
            </Rhythm>
            <Headline>{width && width < viewports.small.max ? 'Experience' : 'Work Experience'}</Headline>
          </Flex>
        </Rhythm>
        <Timeline expanded={expandExperience} isStraddled={isTimelineStraddled} width={timelineWidth} />

        <Rhythm mb={10} mt={15}>
          <Headline>Skills</Headline>
        </Rhythm>
        <IndentedSkills isTimelineStraddled={isTimelineStraddled} />
      </RightColumn>
    </GridLayout>
  );
});
