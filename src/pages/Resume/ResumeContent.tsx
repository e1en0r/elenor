import styled from '@emotion/styled';
import { memo, useCallback, useState } from 'react';
import { Flex, StyledIconButton, Rhythm, themes, useThemeId } from '@phork/phorkit';
import { TIMELINE_GUTTER_WIDTH, TIMELINE_POINTER_SIZE, TIMELINE_STRADDLED_LEFT_WIDTH } from 'config/sizes';
import { viewports } from 'config/viewports';
import { Headline } from 'components/Headline';
import { Skills } from 'components/Skills/Skills';
import { Timeline } from 'components/Timeline';
import { ExpandIcon, CollapseIcon } from 'icons/index';

const MINIMUM_TIMELINE_GUTTER = TIMELINE_GUTTER_WIDTH * 2;
const MAXIMUM_TIMELINE_WIDTH = 788;
const MINIMUM_TIMELINE_WIDTH = 350;

const getWidth = (width?: number) => {
  if (width) {
    return Math.max(MINIMUM_TIMELINE_WIDTH, Math.min(MAXIMUM_TIMELINE_WIDTH, width - MINIMUM_TIMELINE_GUTTER * 2));
  }
  return undefined;
};

const MinWidthFlex = styled(Flex)`
  min-width: ${MINIMUM_TIMELINE_WIDTH}px;
`;

const FitContentFlex = styled(Flex)`
  width: fit-content;
`;

const IndentedSkills = styled(Skills, {
  shouldForwardProp: prop => prop !== 'isStraddledTimeline',
})<{ isStraddledTimeline: boolean }>`
  padding-left: ${({ isStraddledTimeline }) =>
    isStraddledTimeline ? TIMELINE_STRADDLED_LEFT_WIDTH + TIMELINE_POINTER_SIZE * 2 : TIMELINE_GUTTER_WIDTH}px;
`;

export type ResumeContentProps = {
  alignRight?: boolean;
  width?: number;
};

export const ResumeContent = memo(function ResumeContent({ alignRight, width }: ResumeContentProps) {
  const themeId = useThemeId();

  const [expandExperience, setExpandExperience] = useState(false);
  const ExperienceIcon = expandExperience ? CollapseIcon : ExpandIcon;

  const handleToggleExperience = useCallback(
    () => setExpandExperience(currentExpandExperience => !currentExpandExperience),
    [],
  );

  const isStraddledTimeline = !!alignRight;

  return (
    <MinWidthFlex wrap alignItems="flex-start" direction="row" justifyContent={alignRight ? 'space-between' : 'center'}>
      <Flex direction="column">Hello world</Flex>
      <FitContentFlex alignItems={alignRight ? 'flex-end' : 'center'} direction="column">
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
            <Headline>{width && width < viewports.small.max ? 'Experience' : 'Work Experience'}</Headline>{' '}
          </Flex>
        </Rhythm>
        <Timeline expanded={expandExperience} isStraddled={isStraddledTimeline} width={getWidth(width)} />

        <Rhythm mb={10} mt={15}>
          <Headline>Skills</Headline>
        </Rhythm>
        <IndentedSkills isStraddledTimeline={isStraddledTimeline} />
      </FitContentFlex>
    </MinWidthFlex>
  );
});
