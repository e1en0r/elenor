import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { useThemeId } from '@phork/phorkit';
import { TimelineContent, TimelineContentProps } from 'components/Timeline/TimelineContent';

jest.mock('@phork/phorkit', () => ({
  ...jest.requireActual('@phork/phorkit'),
  useThemeId: jest.fn(),
}));

describe('TimelineContent', () => {
  beforeEach(() => {
    (useThemeId as jest.Mock).mockImplementation((themeId: 'dark' | 'light' | undefined) => themeId || 'light');
  });

  const defaultProps: TimelineContentProps = {
    itemPosition: 'left-center',
    itemWidth: 300,
    labelPosition: 'left-center',
    labelWidth: 150,
  };

  it('renders TimelineLabels with the correct text', () => {
    const { getByText } = render(<TimelineContent {...defaultProps} />);

    expect(getByText('2022 - 2024')).toBeInTheDocument();
    expect(getByText('2011 - 2022')).toBeInTheDocument();
    expect(getByText('2009 - 2011')).toBeInTheDocument();
  });

  it('renders TimelineItems with the correct company names', () => {
    const { getByText } = render(<TimelineContent {...defaultProps} />);

    expect(getByText('Rivian -')).toBeInTheDocument();
    expect(getByText('Ubiquiti Networks -')).toBeInTheDocument();
    expect(getByText('TBWA Chiat Day -')).toBeInTheDocument();
  });

  it('renders TimelineItemList when expanded', () => {
    const { getByText } = render(<TimelineContent expanded {...defaultProps} />);

    const expandedItems = [
      'Led front-end development for supply chain apps, driving performance improvements and reducing load times.',
      'Led front-end development for multiple generations of the UniFi web app.',
      "Developed the front-end and PHP back-end for Gatorade's Player of the Year website, creating a highly responsive and interactive experience.",
    ];

    expandedItems.forEach(item => {
      expect(getByText(item)).toBeInTheDocument();
    });

    expect(
      getByText(
        'Led front-end development for supply chain apps, driving performance improvements and reducing load times.',
      ),
    ).toBeInTheDocument();

    expect(getByText('Led front-end development for multiple generations of the UniFi web app.')).toBeInTheDocument();

    expect(
      getByText(
        "Developed the front-end and PHP back-end for Gatorade's Player of the Year website, creating a highly responsive and interactive experience.",
      ),
    ).toBeInTheDocument();
  });

  it('renders the correct icons for each company', () => {
    const { getByTitle } = render(<TimelineContent {...defaultProps} />);

    expect(getByTitle('Rivian')).toBeInTheDocument();
    expect(getByTitle('Ubiquiti')).toBeInTheDocument();
    expect(getByTitle('TBWA Chiat Day')).toBeInTheDocument();
  });

  it('should correctly apply themeId from props and context', () => {
    (useThemeId as jest.Mock).mockReturnValue('dark');

    const { container, rerender } = render(<TimelineContent {...defaultProps} />);
    expect(container.firstChild).toHaveStyle('--timeline-item-connector-color: #3d3f49');

    (useThemeId as jest.Mock).mockReturnValue('light');
    rerender(<TimelineContent {...defaultProps} />);

    expect(container.firstChild).toHaveStyle('--timeline-item-connector-color: #d1d1d6');
  });
});
