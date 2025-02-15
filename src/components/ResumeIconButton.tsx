import { css, cx } from '@emotion/css';
import { IconButton, IconButtonElementType, IconButtonProps, themes, useThemeId } from '@phork/phorkit';

export type ResumeIconButtonProps<T extends IconButtonElementType = 'button'> = Omit<IconButtonProps<T>, 'unthemed'>;

export const ResumeIconButton = <T extends IconButtonElementType = 'button'>({
  className,
  themeId: initThemeId,
  ...props
}: ResumeIconButtonProps<T>): JSX.Element => {
  const themeId = useThemeId(initThemeId);

  const customColors = css`
    --button-primary-color: ${themes[themeId]['primary-palette-text-color']};
    --button-inverse-color: ${themes[themeId]['primary-palette-background-color']};
    --button-hovered-primary-color: ${themes[themeId]['primary-palette-quiet-color']};
    --button-active-primary-color: ${themes[themeId]['primary-palette-quiet-color']};
  `;

  return (
    <IconButton<T>
      unthemed
      className={className ? cx(className, customColors) : customColors}
      shape="circle"
      weight="solid"
      {...(props as IconButtonProps<T>)}
    />
  );
};

ResumeIconButton.displayName = 'ResumeIconButton';
