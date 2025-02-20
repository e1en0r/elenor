import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Theme, ThemeContext } from '@phork/phorkit';
import { ResumeHeader } from 'components/ResumeHeader';

describe('ResumeHeader', () => {
  const toggleThemeIdMock = jest.fn();

  beforeEach(() => {
    toggleThemeIdMock.mockClear();
  });

  const renderWithThemeContext = (themeId: Theme) => {
    return render(
      <ThemeContext.Provider value={{ clearThemeId: jest.fn(), themeId, toggleThemeId: toggleThemeIdMock }}>
        <ResumeHeader width={1000} />
      </ThemeContext.Provider>,
    );
  };

  it('renders the ResumeHeader with default props', () => {
    const { getByText } = renderWithThemeContext('light');

    expect(getByText('Elenor Collings')).toBeInTheDocument();
    expect(getByText('Sr. Front-End Software Engineer')).toBeInTheDocument();
  });

  it('renders SunIcon when the theme is "dark"', () => {
    const { getByTitle } = renderWithThemeContext('dark');

    const themeButton = getByTitle('Use light theme');
    expect(themeButton).toBeInTheDocument();
    expect(themeButton.nodeName).toBe('BUTTON');
    expect(themeButton.querySelector('svg > title')?.innerHTML).toBe('Sun icon');
  });

  it('renders MoonIcon when the theme is "light"', () => {
    const { getByTitle } = renderWithThemeContext('light');

    const themeButton = getByTitle('Use dark theme');
    expect(themeButton).toBeInTheDocument();
    expect(themeButton.nodeName).toBe('BUTTON');
    expect(themeButton.querySelector('svg > title')?.innerHTML).toBe('Moon icon');
  });

  it('toggles theme when the button is clicked', () => {
    const { getByRole } = renderWithThemeContext('light');

    const themeButton = getByRole('button');
    expect(themeButton.getAttribute('title')).toBe('Use dark theme');

    fireEvent.click(themeButton);
    expect(toggleThemeIdMock).toHaveBeenCalledTimes(1);
  });

  it('applies the default styles', () => {
    const { container } = renderWithThemeContext('light');

    const buttonContainer = container.querySelector('div');
    expect(buttonContainer).toHaveStyle(`
      margin: 24px 24px 24px 48px;
      padding-right: 90px;
    `);
  });
});
