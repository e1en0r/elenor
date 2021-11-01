import { ModalLoader } from 'modals/ModalLoader';
import { render } from '../utils';

jest.mock('components/LineLoader', () => {
  return {
    LineLoader: () => 'LineLoader',
  };
});

describe('<ModalLoader />', () => {
  it('should render a modal loader', () => {
    const { getByText } = render(<ModalLoader size="medium" />);

    expect(getByText('LineLoader')).toBeTruthy();
  });
});
