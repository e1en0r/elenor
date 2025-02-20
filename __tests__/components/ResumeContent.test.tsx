import { ResumeContent } from 'components/ResumeContent';
import { fireEvent, render } from '../utils';

jest.mock('components/Timeline', () => ({
  Timeline: ({ expanded }: { expanded: boolean }) => (
    <div data-testid="mocked-timeline">{expanded ? 'Expanded timeline' : 'Collapsed timeline'}</div>
  ),
}));

describe('<ResumeContent />', () => {
  afterAll(() => {
    jest.resetModules();
    jest.unmock('components/Timeline');
  });

  it('renders the page content', () => {
    const { getByText, getByLabelText, getByTitle } = render(<ResumeContent width={1600} />);

    expect(getByText('EC')).toBeTruthy();
    expect(getByText('Los Angeles, CA')).toBeTruthy();
    expect(getByLabelText('Profile picture')).toBeTruthy();

    expect(getByText('Introduction').nodeName).toBe('H3');

    expect(getByTitle('Open GitHub').getAttribute('href')).toBe('https://github.com/e1en0r');
    expect(getByTitle('Open LinkedIn').getAttribute('href')).toBe('https://linkedin.com/in/elenor');

    expect(getByText('Work Experience').nodeName).toBe('H3');
    expect(getByText('Collapsed timeline')).toBeTruthy();
    expect(getByTitle('Expand icon').parentElement?.getAttribute('width')).toBe('32px');

    expect(getByText('Skills').nodeName).toBe('H3');
    expect(getByText('Build Tools')).toBeTruthy();
  });

  it('renders different content in a small page', () => {
    const { getByText, getByTitle } = render(<ResumeContent width={500} />);

    expect(getByText('Experience').nodeName).toBe('H3');
    expect(getByTitle('Expand icon').parentElement?.getAttribute('width')).toBe('24px');
  });

  it('has a button to expand and collapse the experience', () => {
    const { getByTitle, getByTestId } = render(<ResumeContent width={1600} />);

    const expandButton = getByTitle('Expand experience details');
    expect(expandButton.nodeName).toBe('BUTTON');
    expect(expandButton.getAttribute('aria-label')).toBe('Expand experience details');
    expect(getByTestId('mocked-timeline').textContent).toBe('Collapsed timeline');

    fireEvent.click(expandButton);

    expect(expandButton.getAttribute('aria-label')).toBe('Collapse experience details');
    expect(getByTestId('mocked-timeline').textContent).toBe('Expanded timeline');
  });
});
