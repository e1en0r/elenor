import styled from '@emotion/styled';
import { useContext } from 'react';
import { Flex, Position, Rhythm, SvgIconProps, Theme, ThemeContext, useThemeId } from '@phork/phorkit';
import {
  HEADER_LEFT_OFFSET,
  HEADER_RIGHT_OFFSET,
  HEADER_TOP_OFFSET,
  XLARGE_HEADER_LEFT_OFFSET,
  XLARGE_HEADER_RIGHT_OFFSET,
  XLARGE_HEADER_TOP_OFFSET,
  SMALL_HEADER_LEFT_OFFSET,
  SMALL_HEADER_RIGHT_OFFSET,
  SMALL_HEADER_TOP_OFFSET,
} from 'config/sizes';
import { viewports } from 'config/viewports';
import { Byline, Headline } from 'components/Headline';
import { ResumeIconButton } from 'components/ResumeIconButton';
import { MoonIcon, SunIcon } from 'icons/index';

export type ResumeHeaderProps = {
  width?: number;
};

// this uses margin rather than padding so that it affects the button group
const Container = styled.div<{ themeId: Theme }>`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: ${HEADER_TOP_OFFSET}px ${HEADER_RIGHT_OFFSET}px ${HEADER_TOP_OFFSET}px ${HEADER_LEFT_OFFSET}px;
  padding-right: 90px;
  position: relative;

  @media (max-width: ${viewports.small.max}px) {
    justify-content: flex-start;
    margin: ${SMALL_HEADER_TOP_OFFSET}px ${SMALL_HEADER_RIGHT_OFFSET}px ${SMALL_HEADER_TOP_OFFSET}px
      ${SMALL_HEADER_LEFT_OFFSET}px;
    padding-left: 0;
  }

  @media (min-width: ${viewports.xlarge.min}px) {
    justify-content: flex-start;
    margin: ${XLARGE_HEADER_TOP_OFFSET}px ${XLARGE_HEADER_RIGHT_OFFSET}px ${XLARGE_HEADER_TOP_OFFSET}px
      ${XLARGE_HEADER_LEFT_OFFSET}px;
    padding-left: 0;
  }
`;

export const ResumeHeader = ({ width }: ResumeHeaderProps): JSX.Element => {
  const themeId = useThemeId();
  const ThemeIcon: React.FC<SvgIconProps> = themeId === 'dark' ? SunIcon : MoonIcon;
  const toggleThemeLabel = themeId === 'dark' ? 'Use light theme' : 'Use dark theme';

  const { toggleThemeId } = useContext(ThemeContext);
  const handleThemeClick = () => toggleThemeId();

  return (
    <Container themeId={themeId}>
      <Flex direction="column">
        <Headline>Elenor Collings</Headline>
        <Rhythm mt={1}>
          <Byline>Sr. Front-End Software Engineer</Byline>
        </Rhythm>
      </Flex>
      <Position location="right-center" variant="inside">
        <ResumeIconButton
          key="theme"
          onClick={handleThemeClick}
          size={width && width < viewports.small.max ? 'xlarge' : '4xlarge'}
        >
          <ThemeIcon size={width && width < viewports.small.max ? 24 : 32} title={toggleThemeLabel} />
        </ResumeIconButton>
      </Position>
    </Container>
  );
};

ResumeHeader.displayName = 'ResumeHeader';
