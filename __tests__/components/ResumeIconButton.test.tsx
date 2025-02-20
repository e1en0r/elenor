import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { themes, useThemeId } from '@phork/phorkit';
import { ResumeIconButton } from 'components/ResumeIconButton';
import { SunIcon } from 'icons/SunIcon';

jest.mock('@phork/phorkit', () => ({
  ...jest.requireActual('@phork/phorkit'),
  useThemeId: jest.fn(),
}));

describe('ResumeIconButton', () => {
  const mockUseThemeId = useThemeId as jest.Mock;

  beforeEach(() => {
    mockUseThemeId.mockClear();
  });

  it('applies correct theme-based styles when themeId is light', () => {
    mockUseThemeId.mockReturnValue('light');

    const { getByRole } = render(
      <ResumeIconButton aria-label="test-button">
        <SunIcon />
      </ResumeIconButton>,
    );

    const button = getByRole('button');
    const styles = window.getComputedStyle(button);

    expect(styles.getPropertyValue('--button-primary-color')).toBe(themes.light['primary-palette-text-color']);
    expect(styles.getPropertyValue('--button-inverse-color')).toBe(themes.light['primary-palette-background-color']);
    expect(styles.getPropertyValue('--button-hovered-primary-color')).toBe(themes.light['primary-palette-quiet-color']);
    expect(styles.getPropertyValue('--button-active-primary-color')).toBe(themes.light['primary-palette-quiet-color']);
  });

  it('applies correct theme-based styles when themeId is dark', () => {
    mockUseThemeId.mockReturnValue('dark');

    const { getByRole } = render(
      <ResumeIconButton aria-label="test-button">
        <SunIcon />
      </ResumeIconButton>,
    );

    const button = getByRole('button');
    const styles = window.getComputedStyle(button);

    expect(styles.getPropertyValue('--button-primary-color')).toBe(themes.dark['primary-palette-text-color']);
    expect(styles.getPropertyValue('--button-inverse-color')).toBe(themes.dark['primary-palette-background-color']);
    expect(styles.getPropertyValue('--button-hovered-primary-color')).toBe(themes.dark['primary-palette-quiet-color']);
    expect(styles.getPropertyValue('--button-active-primary-color')).toBe(themes.dark['primary-palette-quiet-color']);
  });

  it('applies correct styles when themeId is passed as a prop', () => {
    mockUseThemeId.mockReturnValue('dark');

    const { getByRole } = render(
      <ResumeIconButton aria-label="test-button" themeId="dark">
        <SunIcon />
      </ResumeIconButton>,
    );

    const button = getByRole('button');
    const styles = window.getComputedStyle(button);

    expect(styles.getPropertyValue('--button-primary-color')).toBe(themes.dark['primary-palette-text-color']);
  });

  it('renders with additional className if provided', () => {
    mockUseThemeId.mockReturnValue('light');

    const { getByRole } = render(
      <ResumeIconButton aria-label="test-button" className="custom-class">
        <SunIcon />
      </ResumeIconButton>,
    );

    const button = getByRole('button');
    expect(button.className).toContain('custom-class');
  });

  it('passes other props correctly to the IconButton', () => {
    const { getByLabelText } = render(
      <ResumeIconButton aria-label="test-button">
        <SunIcon />
      </ResumeIconButton>,
    );

    const button = getByLabelText('test-button');
    expect(button).toHaveAttribute('aria-label', 'test-button');
  });

  it('renders the child icon inside the button', () => {
    const { getByTitle } = render(
      <ResumeIconButton aria-label="test-button">
        <SunIcon data-testid="icon" />
      </ResumeIconButton>,
    );

    const icon = getByTitle('Sun');
    expect(icon).toBeInTheDocument();
  });
});
