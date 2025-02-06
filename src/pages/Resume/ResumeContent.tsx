import styled from '@emotion/styled';
import { memo, useCallback, useState } from 'react';
import { Flex, StyledIconButton, Position, Rhythm, themes, useThemeId } from '@phork/phorkit';
import { viewports } from 'config/viewports';
import { Headline } from 'components/Headline';
import { Timeline } from 'components/Timeline';
import { ExpandIcon, CollapseIcon } from 'icons/index';

const MINIMUM_TIMELINE_GUTTER = 50;
const MAXIMUM_TIMELINE_WIDTH = 800;
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

  return (
    <MinWidthFlex alignItems={alignRight ? 'flex-end' : 'center'} direction="column">
      <FitContentFlex alignItems={alignRight ? 'flex-end' : 'center'} direction="column">
        <Rhythm mb={10}>
          <Headline>
            <Rhythm ml={-4}>
              <Position location="left-center" variant="outside">
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
                </StyledIconButton>
              </Position>
            </Rhythm>
            {width && width < viewports.small.max ? 'Experience' : 'Work Experience'}
          </Headline>
        </Rhythm>
        <Timeline expanded={expandExperience} isStraddled={alignRight} width={getWidth(width)} />
      </FitContentFlex>
    </MinWidthFlex>
  );
});
