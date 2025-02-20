/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import {
  StraddledTimeline,
  StraddledTimelineProps,
  Timeline as InlineTimeline,
  TimelineProps,
  useThemeId,
} from '@phork/phorkit';
import { Timeline } from 'components/Timeline/Timeline';
import { TimelineContent } from 'components/Timeline/TimelineContent';

jest.mock('@phork/phorkit', () => ({
  ...jest.requireActual('@phork/phorkit'),
  useThemeId: jest.fn(),
  StraddledTimeline: jest.fn(({ children }: StraddledTimelineProps) => children),
  Timeline: jest.fn(({ children }: TimelineProps) => children),
}));

describe('Timeline', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useThemeId as jest.Mock).mockImplementation((themeId: 'dark' | 'light' | undefined) => themeId || 'light');
  });

  it('renders StyledInlineTimeline when isStraddled is false (default)', () => {
    render(<Timeline />);

    expect(InlineTimeline).toHaveBeenCalledWith(
      expect.objectContaining({
        children: expect.objectContaining({
          type: TimelineContent,
          props: expect.objectContaining({
            itemPosition: 'right-center',
            itemWidth: 800,
            labelPosition: 'right-center',
            labelWidth: 800,
            themeId: 'light',
          }),
        }),
        spacing: 'cozy',
        className: expect.any(String),
      }),
      expect.anything(),
    );
  });

  it('renders StyledStraddledTimeline when isStraddled is true', () => {
    render(<Timeline isStraddled />);

    expect(StraddledTimeline).toHaveBeenCalledWith(
      expect.objectContaining({
        children: expect.objectContaining({
          type: TimelineContent,
          props: expect.objectContaining({
            itemPosition: 'right-center',
            itemWidth: 650,
            labelPosition: 'left-center',
            labelWidth: 150,
            themeId: 'light',
          }),
        }),
        leftWidth: 150,
        rightWidth: 650,
        spacing: 'cozy',
        className: expect.any(String),
      }),
      expect.anything(),
    );
  });

  it('passes expanded prop correctly to TimelineContent', () => {
    render(<Timeline expanded isStraddled />);

    expect(StraddledTimeline).toHaveBeenCalledWith(
      expect.objectContaining({
        children: expect.objectContaining({
          type: TimelineContent,
          props: expect.objectContaining({
            expanded: true,
            itemPosition: 'right-center',
            itemWidth: 650,
            labelPosition: 'left-center',
            labelWidth: 150,
            themeId: 'light',
          }),
        }),
        leftWidth: 150,
        rightWidth: 650,
        spacing: 'cozy',
        className: expect.any(String),
      }),
      expect.anything(),
    );
  });

  it('does not pass expanded prop to TimelineContent when expanded is false', () => {
    render(<Timeline isStraddled expanded={false} />);

    expect(StraddledTimeline).toHaveBeenCalledWith(
      expect.objectContaining({
        children: expect.objectContaining({
          type: TimelineContent,
          props: expect.objectContaining({
            expanded: false,
          }),
        }),
        leftWidth: 150,
        rightWidth: 650,
        spacing: 'cozy',
        className: expect.any(String),
      }),
      expect.anything(),
    );
  });

  it('renders with dark theme when themeId is dark', () => {
    render(<Timeline themeId="dark" />);

    expect(InlineTimeline).toHaveBeenCalledWith(
      expect.objectContaining({
        children: expect.objectContaining({
          type: TimelineContent,
          props: expect.objectContaining({
            themeId: 'dark',
          }),
        }),
        spacing: 'cozy',
        className: expect.any(String),
      }),
      expect.anything(),
    );
  });

  it('renders with the correct company names', () => {
    const { getByText } = render(<Timeline />);

    expect(getByText('Rivian -')).toBeInTheDocument();
    expect(getByText('Ubiquiti Networks -')).toBeInTheDocument();
    expect(getByText('TBWA Chiat Day -')).toBeInTheDocument();
  });
});
