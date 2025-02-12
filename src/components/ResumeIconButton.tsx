import { StyledIconButton, StyledIconButtonProps, ThemeProps, themes, useThemeId } from '@phork/phorkit';

export type ResumeIconButtonProps = ThemeProps &
  Omit<
    StyledIconButtonProps,
    'activePrimaryColor' | 'hoveredPrimaryColor' | 'inverseColor' | 'primaryColor' | 'shape' | 'weight '
  >;

export const ResumeIconButton = ({ themeId: initThemeId, ...props }: ResumeIconButtonProps): JSX.Element => {
  const themeId = useThemeId(initThemeId);

  return (
    <StyledIconButton
      activePrimaryColor={themes[themeId]['primary-palette-quiet-color']}
      hoveredPrimaryColor={themes[themeId]['primary-palette-quiet-color']}
      inverseColor={themes[themeId]['primary-palette-background-color']}
      primaryColor={themes[themeId]['primary-palette-text-color']}
      shape="circle"
      weight="solid"
      {...props}
    />
  );
};

ResumeIconButton.displayName = 'ResumeIconButton';
