import { themes } from '@phork/phorkit';
import localDarkTheme from '../../config/darkTheme.json';

export const themeId = 'dark';
export const theme = {
  ...themes[themeId],
  ...localDarkTheme,
};
