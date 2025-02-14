import { Resume } from 'pages/Resume/Resume';
import { render } from '../utils';

describe('<Resume />', () => {
  it('should render the name', () => {
    const { getByText } = render(<Resume />);
    expect(getByText('Elenor Collings')).toBeTruthy();
  });
});
