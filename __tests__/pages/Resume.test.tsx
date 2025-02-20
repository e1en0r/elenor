import { Resume } from 'pages/Resume/Resume';
import { render } from '../utils';

describe('<Resume />', () => {
  it('renders the name', () => {
    const { getByText } = render(<Resume />);
    expect(getByText('Elenor Collings')).toBeTruthy();
  });
});
