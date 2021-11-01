import '@testing-library/jest-dom/extend-expect';
import { AppContent } from 'components/AppContent';
import { render } from '../utils';

describe('<AppContent />', () => {
  it('should render the content', () => {
    const { getByTestId } = render(<AppContent data-testid="content" />);

    const content = getByTestId('content');
    expect(content).toHaveAttribute('tabIndex', '0');
  });
});
