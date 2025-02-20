import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { useThemeId } from '@phork/phorkit';
import { TimelineLabel } from 'components/Timeline/TimelineLabel';

jest.mock('@phork/phorkit', () => ({
  ...jest.requireActual('@phork/phorkit'),
  useThemeId: jest.fn(),
}));

describe('<TimelineLabel />', () => {
  beforeEach(() => {
    (useThemeId as jest.Mock).mockImplementation((themeId: 'dark' | 'light' | undefined) => themeId || 'light');
  });

  it('renders the children correctly', () => {
    const { getByText } = render(<TimelineLabel>Test Label</TimelineLabel>);

    expect(getByText('Test Label')).toBeTruthy();
  });

  it('uses the provided themeId if passed', () => {
    (useThemeId as jest.Mock).mockReturnValue('dark');

    const { getByTestId } = render(
      <TimelineLabel data-testid="timeline-divider-item" themeId="dark">
        Dark Theme
      </TimelineLabel>,
    );

    expect(getByTestId('timeline-divider-item')).toHaveStyle('--timeline-item-connector-color: #3d3f49');
    expect(getByTestId('timeline-divider-item')).toHaveStyle('--status-bubble-triangle-color: #34353e');
  });

  it('uses the default theme if no themeId is passed', () => {
    const { getByTestId } = render(<TimelineLabel data-testid="timeline-divider-item">Default Theme</TimelineLabel>);

    expect(getByTestId('timeline-divider-item')).toHaveStyle('--timeline-item-connector-color: #d1d1d6');
    expect(getByTestId('timeline-divider-item')).toHaveStyle('--status-bubble-triangle-color: #e8e8eb');
  });

  it('passes down props to TimelineDividerItem', () => {
    const { getByTestId } = render(
      <TimelineLabel data-testid="timeline-divider-item" width={200}>
        Props Test
      </TimelineLabel>,
    );

    expect(getByTestId('timeline-divider-item')).toHaveStyle('width: 200px');
  });
});
