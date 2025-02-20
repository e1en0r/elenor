import '@testing-library/jest-dom';
import { CreditsModal } from 'modals/CreditsModal';
import { render } from '../utils';

jest.mock('components/IconCredits', () => {
  return {
    IconCredits: () => 'IconCredits',
  };
});

describe('<CreditsModal />', () => {
  it('renders the icon credits', () => {
    const { getByText } = render(<CreditsModal id="credits" />);

    expect(getByText('IconCredits')).toBeTruthy();
  });

  it('renders the Phork/it link', () => {
    const { getByText } = render(<CreditsModal id="credits" />);

    expect(getByText('Phork/it')).toBeTruthy();
    expect(getByText('Phork/it').closest('a')).toHaveAttribute('href', 'https://phorkit.phork.org');
  });

  it('renders the version', () => {
    const { getByText } = render(<CreditsModal id="credits" />);

    expect(getByText('v1.0.0')).toBeTruthy();
  });
});
