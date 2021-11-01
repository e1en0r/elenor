import { iconCredits, IconCredits } from 'components/IconCredits';
import { render } from '../utils';

describe('<IconCredits />', () => {
  it('should render all the icons', () => {
    const { container } = render(<IconCredits />);

    expect(container.querySelectorAll('svg').length).toBe(iconCredits.length);
  });

  it('should render an the icon source', () => {
    const { getAllByText } = render(<IconCredits />);

    expect(getAllByText(/Freepik/)).toBeTruthy();
  });
});
