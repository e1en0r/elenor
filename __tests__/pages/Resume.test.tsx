import { Resume } from 'pages/Resume/Resume';
import { render } from '../utils';

jest.mock('components/CreditsButton', () => {
  return {
    CreditsButton: () => 'CreditsButton',
  };
});

describe('<Resume />', () => {
  it('should render credits button', () => {
    const { getByText } = render(<Resume />);
    expect(getByText('CreditsButton')).toBeTruthy();
  });

  it('should render the work experience', () => {
    const { getByText } = render(<Resume />);
    expect(getByText('Work Experience')).toBeTruthy();
  });
});
