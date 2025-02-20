import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { useThemeId } from '@phork/phorkit';
import { TimelineItem, TimelineItemProps } from 'components/Timeline/TimelineItem';

jest.mock('@phork/phorkit', () => ({
  ...jest.requireActual('@phork/phorkit'),
  useThemeId: jest.fn(),
}));

describe('<TimelineItem />', () => {
  beforeEach(() => {
    (useThemeId as jest.Mock).mockImplementation((themeId: 'dark' | 'light' | undefined) => themeId || 'light');
  });

  const defaultProps: TimelineItemProps = {
    backgroundColor: '#ff0000',
    jobTitle: 'Software Engineer',
    logoColor: '#ffffff',
    Logo: () => <svg data-testid="logo" />, // Mock logo component
  };

  it('renders the job title correctly', () => {
    const { getByText } = render(<TimelineItem {...defaultProps} />);
    expect(getByText('Software Engineer')).toBeInTheDocument();
  });

  it('renders the company name when provided', () => {
    const { getByText } = render(<TimelineItem {...defaultProps} company="Phork" />);
    expect(getByText('Phork -')).toBeInTheDocument();
  });

  it('uses the provided themeId if passed', () => {
    (useThemeId as jest.Mock).mockReturnValue('dark');
    const { getByTestId } = render(<TimelineItem {...defaultProps} data-testid="timeline-item" />);

    expect(getByTestId('timeline-item')).toHaveStyle('--timeline-item-connector-color: #3d3f49');
    expect(getByTestId('timeline-item')).toHaveStyle('--timeline-item-state-color: #ff0000');
  });

  it('applies swapColors correctly', () => {
    const { getByTestId } = render(<TimelineItem {...defaultProps} swapColors data-testid="timeline-item" />);

    expect(getByTestId('timeline-item')).toHaveStyle('--timeline-item-state-color: #ffffff');
  });

  it('renders contract ribbon when contract is true', () => {
    const { getByText } = render(<TimelineItem {...defaultProps} contract />);
    expect(getByText('Contract')).toBeInTheDocument();
  });

  it('renders tags when provided', () => {
    const tags = [
      { id: 'react', label: 'React' },
      { id: 'typescript', label: 'TypeScript' },
    ];
    const { getByText } = render(<TimelineItem {...defaultProps} tags={tags} />);

    expect(getByText('React')).toBeInTheDocument();
    expect(getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders the expanded children when expanded is true', () => {
    const { getByText } = render(
      <TimelineItem {...defaultProps} expanded>
        <div>Expanded Content</div>
      </TimelineItem>,
    );

    expect(getByText('Expanded Content')).toBeInTheDocument();
  });

  it('does not render expanded children when expanded is false', () => {
    const { queryByText } = render(
      <TimelineItem {...defaultProps} expanded={false}>
        <div>Expanded Content</div>
      </TimelineItem>,
    );

    expect(queryByText('Expanded Content')).not.toBeInTheDocument();
  });

  it('passes down width to TimelineMarkerItem', () => {
    const { getByTestId } = render(<TimelineItem {...defaultProps} data-testid="timeline-item" width={300} />);
    expect(getByTestId('timeline-item')).toHaveStyle(`width: 300px`);
  });
});
