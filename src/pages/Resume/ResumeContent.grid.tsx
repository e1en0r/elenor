import styled from '@emotion/styled';
import { memo, useCallback, useState } from 'react';
import { Position, Rhythm } from '@phork/phorkit';
import { viewports } from 'config/viewports';
import { Headline } from 'components/Headline';
import { ResumeIconButton } from 'components/ResumeIconButton';
import { Skills } from 'components/Skills';
import { Timeline } from 'components/Timeline';
import { ExpandIcon, CollapseIcon } from 'icons/index';

const MINIMUM_TIMELINE_WIDTH = 350;
const MAXIMUM_TIMELINE_WIDTH = 800;
const MINIMUM_SKILLS_WIDTH = 200;
const MAXIMUM_SKILLS_WIDTH = 800;
const TIMELINE_GUTTER = 50;

const getTimelineWidth = (width?: number) => {
  if (width) {
    return Math.max(MINIMUM_TIMELINE_WIDTH, Math.min(MAXIMUM_TIMELINE_WIDTH, width - TIMELINE_GUTTER * 2));
  }
  return undefined;
};

const ResumeGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(${MINIMUM_SKILLS_WIDTH}px, auto) minmax(${MINIMUM_TIMELINE_WIDTH}px, auto);
  justify-content: end;
  align-items: start;
  gap: 120px;
  width: 100%;

  @media (max-width: ${viewports.large.max}px) {
    grid-template-columns: 1fr;
    justify-content: center;
    gap: 40px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-self: end;
  width: 100%;
`;

const SkillsSection = styled(Section)`
  max-width: ${MAXIMUM_SKILLS_WIDTH}px;
`;

const TimelineSection = styled(Section)`
  max-width: ${MAXIMUM_TIMELINE_WIDTH}px;
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
    <ResumeGrid>
      <SkillsSection>
        <Rhythm mb={10}>
          <Headline>Skill Levels</Headline>
        </Rhythm>
        <Skills />
      </SkillsSection>
      <TimelineSection>
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
    </ResumeGrid>
  );
});
