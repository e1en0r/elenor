import '@testing-library/jest-dom';
import { LineLoader } from 'components/LineLoader';
import { render } from '../utils';

describe('<LineLoader />', () => {
  it('renders a line loader', () => {
    const { getByTestId } = render(<LineLoader data-testid="loader" />);

    const loader = getByTestId('loader');
    expect(loader).toHaveAttribute('aria-label', 'Loading...');
  });
});
