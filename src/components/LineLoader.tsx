import { StyledLineLoader, StyledLineLoaderProps, useThemeId } from '@phork/phorkit';
import { themes } from 'constants/themes';

export const LineLoader = ({
  color,
  style: initStyle,
  ...props
}: Partial<StyledLineLoaderProps>): React.ReactElement => {
  const themeId = useThemeId();
  const style = { zIndex: 1000, ...initStyle };

  return <StyledLineLoader color={color || themes[themeId]['line-loader-color']} style={style} {...props} />;
};

LineLoader.displayName = 'LineLoader';
