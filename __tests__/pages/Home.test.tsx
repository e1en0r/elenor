import '@testing-library/jest-dom/extend-expect';
import { Home } from 'pages/Home/Home';
import { render } from '../utils';

jest.mock('components/CreditsButton', () => {
  return {
    CreditsButton: () => 'CreditsButton',
  };
});

describe('<Home />', () => {
  it('should render credits button', () => {
    const { getByText } = render(<Home />);
    expect(getByText('CreditsButton')).toBeTruthy();
  });

  it('should render the Phork/it link', () => {
    const { getByTitle } = render(<Home />);

    expect(getByTitle('Phork/it component library')).toBeTruthy();
    expect(getByTitle('Phork/it component library').closest('a')).toHaveAttribute('href', 'https://phorkit.phork.org');
  });

  it('should render the Github link', () => {
    const { getByTitle } = render(<Home />);

    expect(getByTitle('Github')).toBeTruthy();
    expect(getByTitle('Github').closest('a')).toHaveAttribute('href', 'https://github.com/e1en0r');
  });

  it('should render the Instagram link', () => {
    const { getByTitle } = render(<Home />);

    expect(getByTitle('Instagram')).toBeTruthy();
    expect(getByTitle('Instagram').closest('a')).toHaveAttribute('href', 'https://www.instagram.com/e1en0r/');
  });

  it('should render the Twitter link', () => {
    const { getByTitle } = render(<Home />);

    expect(getByTitle('Twitter')).toBeTruthy();
    expect(getByTitle('Twitter').closest('a')).toHaveAttribute('href', 'https://twitter.com/e1en0r');
  });

  it('should render the LinkedIn link', () => {
    const { getByTitle } = render(<Home />);

    expect(getByTitle('LinkedIn')).toBeTruthy();
    expect(getByTitle('LinkedIn').closest('a')).toHaveAttribute('href', 'https://www.linkedin.com/in/elenor/');
  });

  it('should render the Email link', () => {
    const { getByTitle } = render(<Home />);

    expect(getByTitle('Email')).toBeTruthy();
    expect(getByTitle('Email').closest('a')).toHaveAttribute('href', 'http://scr.im/elenor');
  });
});
