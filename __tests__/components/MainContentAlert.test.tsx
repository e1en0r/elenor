import { MainContentAlert } from 'components/MainContentAlert';
import { HeartIcon } from 'icons/HeartIcon';
import { render } from '../utils';

describe('<MainContentAlert />', () => {
  it('renders a warning alert message', () => {
    const { container, getByText } = render(<MainContentAlert color="warning" icon={HeartIcon} message="Alert!" />);

    expect(getByText('Alert!')).toBeTruthy();
    expect(container.querySelector('svg')).toBeTruthy();
  });

  it('renders a danger alert message', () => {
    const { container, getByText } = render(<MainContentAlert color="danger" icon={HeartIcon} message="Alert!" />);

    expect(getByText('Alert!')).toBeTruthy();
    expect(container.querySelector('svg')).toBeTruthy();
  });

  it('renders a primary alert message', () => {
    const { container, getByText } = render(<MainContentAlert color="primary" icon={HeartIcon} message="Alert!" />);

    expect(getByText('Alert!')).toBeTruthy();
    expect(container.querySelector('svg')).toBeTruthy();
  });

  it('renders a default alert message', () => {
    const { container, getByText } = render(<MainContentAlert icon={HeartIcon} message="Alert!" />);

    expect(getByText('Alert!')).toBeTruthy();
    expect(container.querySelector('svg')).toBeTruthy();
  });
});
