import { Skills } from 'components/Skills/Skills';
import { render } from '../../utils';

describe('<Skills />', () => {
  it('renders the content', () => {
    const { getByText } = render(<Skills />);

    expect(getByText('Core Front-End Technologies')).toBeTruthy();
    expect(getByText('HTML5', { exact: false })).toBeTruthy();
    expect(getByText('Phork/it').getAttribute('href')).toBe('https://phorkit.phork.org');
  });
});
