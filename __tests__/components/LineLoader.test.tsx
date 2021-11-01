import '@testing-library/jest-dom/extend-expect';
import { LineLoader } from 'components/LineLoader';
import { render } from '../utils';

describe('<LineLoader />', () => {
  it('should render a line loader', () => {
    const { getByTestId } = render(<LineLoader data-testid="loader" />);

    const loader = getByTestId('loader');
    expect(loader).toHaveAttribute('aria-label', 'Loading...');
  });
});
