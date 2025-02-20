import { MissingContentAlert } from 'components/MissingContentAlert';
import { render } from '../utils';

describe('<MissingContentAlert />', () => {
  it('renders the alert message and icon', () => {
    const { container, getByText } = render(<MissingContentAlert color="warning" message="Alert!" />);

    expect(getByText('Alert!')).toBeTruthy();
    expect(container.querySelector('svg')).toBeTruthy();
  });
});
