import styled from '@emotion/styled';
import { memo, useCallback, useState } from 'react';
import { Flex, Rhythm, Avatar, Typography } from '@phork/phorkit';
import { TIMELINE_GUTTER_WIDTH, TIMELINE_POINTER_SIZE, TIMELINE_STRADDLED_LEFT_WIDTH } from 'config/sizes';
import { GITHUB, LINKEDIN } from 'config/strings';
import { viewports } from 'config/viewports';
import { Section, SubSection } from 'components/Headline';
import { ResumeIconButton } from 'components/ResumeIconButton';
import { Skills } from 'components/Skills';
import { Timeline } from 'components/Timeline';
import { ExpandIcon, CollapseIcon, GithubSolidIcon, LinkedinIcon } from 'icons/index';

const COLUMN_BREAKPOINT = 1380;
const MAXIMUM_PFP_WIDTH = 400;
const GRID_GAP_WIDTH = 40;

const MINIMUM_TIMELINE_GUTTER = TIMELINE_GUTTER_WIDTH * 2;
const MAXIMUM_TIMELINE_WIDTH = 788;
const MINIMUM_TIMELINE_WIDTH = 320;

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
  width: fit-content;
  margin-top: 36px;

  @media (max-width: ${COLUMN_BREAKPOINT}px) {
    justify-self: end;
    margin-top: 0;
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

// this visually centers the avatar over the introduction and under the name
const AvatarContainer = styled(Flex)`
  margin-left: 84px;

  @media (max-width: ${COLUMN_BREAKPOINT}px) {
    margin-left: 0;
    margin-right: 32px;
  }

  @media (max-width: ${viewports.small.max}px) {
    margin-right: 0;
  }
`;

// this visually aligns the right column content with the timeline content
const RightColumnContent = styled.div<{ isTimelineStraddled: boolean }>`
  padding-left: ${({ isTimelineStraddled }) =>
    isTimelineStraddled ? TIMELINE_STRADDLED_LEFT_WIDTH + TIMELINE_POINTER_SIZE * 2 : TIMELINE_GUTTER_WIDTH}px;

  @media (max-width: ${viewports.small.max}px) {
    padding-left: 0;
  }
`;

export type ResumeContentProps = {
  alignRight?: boolean;
  width: number;
};

export const ResumeContent = memo(function ResumeContent({ alignRight, width }: ResumeContentProps) {
  const isTimelineStraddled = !!alignRight;
  const isCentered = width <= viewports.small.max;

  const timelineWidth = Math.max(
    MINIMUM_TIMELINE_WIDTH,
    Math.min(MAXIMUM_TIMELINE_WIDTH, width - MINIMUM_TIMELINE_GUTTER * 2),
  );

  const leftColumnWidth = width < COLUMN_BREAKPOINT ? undefined : width - timelineWidth;
  const pfpWidth = Math.min(
    MAXIMUM_PFP_WIDTH,
    leftColumnWidth ? leftColumnWidth / 2 : timelineWidth - (isTimelineStraddled ? TIMELINE_STRADDLED_LEFT_WIDTH : 0),
  );

  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);
  const ExperienceIcon = isExperienceExpanded ? CollapseIcon : ExpandIcon;

  const handleToggleExperience = useCallback(
    () => setIsExperienceExpanded(currentisExperienceExpanded => !currentisExperienceExpanded),
    [],
  );

  return (
    <GridLayout>
      <LeftColumn grouped mb={isCentered ? 6 : 12}>
        <AvatarContainer direction="column">
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

          <Rhythm mt={13}>
            <Flex full justifyContent="center">
              <SubSection>Los Angeles, CA</SubSection>
            </Flex>
          </Rhythm>
        </AvatarContainer>
      </LeftColumn>
      <RightColumn alignItems={alignRight ? 'flex-end' : 'center'} direction="column">
        <Rhythm mb={10}>
          <Section>Introduction</Section>
        </Rhythm>

        <RightColumnContent isTimelineStraddled={isTimelineStraddled} style={{ maxWidth: MAXIMUM_TIMELINE_WIDTH }}>
          <Rhythm mb={4}>
            <Typography<'div'>
              align={isCentered ? 'left' : 'right'}
              as="div"
              size="2xlarge"
              variants={['line-height-comfy']}
            >
              Senior Software Engineer with 15+ years of experience building scalable, sustainable, high-performance web
              applications. Expertise in React, TypeScript, and current front-end technologies, with a proven track
              record in optimizing performance, mentoring teams, and driving cross-functional collaboration to deliver
              exceptional results.
            </Typography>
          </Rhythm>
        </RightColumnContent>

        <Flex alignItems="flex-end" direction="row" justifyContent="center">
          <Rhythm mb={12}>
            <ResumeIconButton<'a'>
              as="a"
              href={GITHUB}
              rel="noopener"
              size="4xlarge"
              target="_blank"
              title="Open GitHub"
              weight="inline"
            >
              <GithubSolidIcon size={32} title="GitHub icon" />
            </ResumeIconButton>
            <ResumeIconButton<'a'>
              as="a"
              href={LINKEDIN}
              rel="noopener"
              size="4xlarge"
              target="_blank"
              title="Open LinkedIn"
              weight="inline"
            >
              <LinkedinIcon size={32} title="LinkedIn icon" />
            </ResumeIconButton>
          </Rhythm>
        </Flex>

        <Rhythm mb={10}>
          <Flex alignItems="center" direction="row">
            <Rhythm mb={1} mr={4}>
              <ResumeIconButton
                aria-expanded={isExperienceExpanded}
                aria-label={isExperienceExpanded ? 'Collapse experience details' : 'Expand experience details'}
                as="button"
                onClick={handleToggleExperience}
                size={width && width < viewports.small.max ? 'xlarge' : '4xlarge'}
                title={isExperienceExpanded ? 'Collapse experience details' : 'Expand experience details'}
              >
                <ExperienceIcon
                  size={width && width < viewports.small.max ? 24 : 32}
                  title={isExperienceExpanded ? 'Collapse icon' : 'Expand icon'}
                />
              </ResumeIconButton>
            </Rhythm>
            <Section>{width && width < viewports.small.max ? 'Experience' : 'Work Experience'}</Section>
          </Flex>
        </Rhythm>
        <Timeline expanded={isExperienceExpanded} isStraddled={isTimelineStraddled} width={timelineWidth} />

        <Rhythm mb={10} mt={15}>
          <Section>Skills</Section>
        </Rhythm>
        <RightColumnContent isTimelineStraddled={isTimelineStraddled}>
          <Skills />
        </RightColumnContent>
      </RightColumn>
    </GridLayout>
  );
});
