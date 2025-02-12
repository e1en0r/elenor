import styled from '@emotion/styled';
import { memo, useCallback, useState } from 'react';
import { Flex, Position, Rhythm } from '@phork/phorkit';
import { viewports } from 'config/viewports';
import { Headline } from 'components/Headline';
import { ResumeIconButton } from 'components/ResumeIconButton';
import { Skills } from 'components/Skills';
import { Timeline } from 'components/Timeline';
import { ExpandIcon, CollapseIcon } from 'icons/index';

const MINIMUM_TIMELINE_GUTTER = 50;
const MAXIMUM_TIMELINE_WIDTH = 800;
const MINIMUM_TIMELINE_WIDTH = 350;

const MAXIMUM_SKILLS_WIDTH = 800;
const MINIMUM_SKILLS_WIDTH = 300;

const MODULE_SPACE_SMALL = 20;
const MODULE_SPACE_LARGE = 40;

const getTimelineWidth = (width?: number) => {
  if (width) {
    return Math.max(MINIMUM_TIMELINE_WIDTH, Math.min(MAXIMUM_TIMELINE_WIDTH, width - MINIMUM_TIMELINE_GUTTER * 2));
  }
  return undefined;
};

const ContainerFlex = styled(Flex)`
  margin-right: -${MODULE_SPACE_LARGE}px;
  margin-left: -${MODULE_SPACE_LARGE}px;

  @media (max-width: ${viewports.small.max}px) {
    margin-left: -${MODULE_SPACE_SMALL}px;
    margin-right: -${MODULE_SPACE_SMALL}px;
  }
`;

const Section = styled(Flex)`
  margin-left: ${MODULE_SPACE_LARGE}px;
  margin-right: ${MODULE_SPACE_LARGE}px;
  margin-bottom: 80px;

  @media (max-width: ${viewports.small.max}px) {
    margin-left: ${MODULE_SPACE_SMALL}px;
    margin-right: ${MODULE_SPACE_SMALL}px;
  }
`;

const SkillsSection = styled(Section)`
  min-width: ${MINIMUM_SKILLS_WIDTH}px;
`;

const TimelineSection = styled(Section)`
  min-width: ${MINIMUM_TIMELINE_WIDTH}px;
`;

export type ResumeContentProps = {
  alignRight?: boolean;
  width?: number;
};

export const ResumeContent = memo(function ResumeContent({ alignRight, width }: ResumeContentProps) {
  const [expandExperience, setExpandExperience] = useState(false);
  const ExperienceIcon = expandExperience ? CollapseIcon : ExpandIcon;

  const handleToggleExperience = useCallback(
    () => setExpandExperience(currentExpandExperience => !currentExpandExperience),
    [],
  );

  return (
    <ContainerFlex wrap direction="row" justifyContent={alignRight ? 'flex-end' : 'center'}>
      <SkillsSection alignItems={alignRight ? 'flex-end' : 'center'} direction="column">
        <Rhythm mb={10}>
          <Headline>Skill Levels</Headline>
        </Rhythm>
        <Skills />
      </SkillsSection>

      <TimelineSection alignItems={alignRight ? 'flex-end' : 'center'} direction="column">
        <Rhythm mb={10}>
          <Headline>
            <Rhythm ml={-4}>
              <Position location="left-center" variant="outside">
                <ResumeIconButton
                  as="button"
                  onClick={handleToggleExperience}
                  size={width && width < viewports.small.max ? 'xlarge' : '4xlarge'}
                >
                  <ExperienceIcon size={width && width < viewports.small.max ? 24 : 32} />
                </ResumeIconButton>
              </Position>
            </Rhythm>
            {width && width < viewports.small.max ? 'Experience' : 'Work Experience'}
          </Headline>
        </Rhythm>
        <Timeline expanded={expandExperience} isStraddled={alignRight} width={getTimelineWidth(width)} />
      </TimelineSection>
    </ContainerFlex>
  );
});
