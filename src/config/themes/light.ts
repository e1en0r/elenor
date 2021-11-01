import { themes } from '@phork/phorkit';
import localLightTheme from '../../config/lightTheme.json';

export const themeId = 'light';
export const theme = {
  ...themes[themeId],
  ...localLightTheme,
};
