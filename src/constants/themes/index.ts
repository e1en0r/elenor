import { themeId as darkThemeId, theme as darkTheme } from './dark';
import { themeId as lightThemeId, theme as lightTheme } from './light';

export const themes = {
  lightThemeId,
  [lightThemeId]: lightTheme,
  darkThemeId,
  [darkThemeId]: darkTheme,
};
