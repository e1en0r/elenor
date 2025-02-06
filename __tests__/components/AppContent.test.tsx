/* eslint-disable react/display-name */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppContent } from 'components/AppContent';

// mock the lazy-loaded components
jest.mock('pages/Resume', () => () => <div>Home</div>);
jest.mock('pages/FourOhFour', () => () => <div>404</div>);

describe('<AppContent />', () => {
  it('should render the content', async () => {
    const { findByText, findByTestId } = render(
      <BrowserRouter
        future={{
          // eslint-disable-next-line camelcase
          v7_startTransition: true,
          // eslint-disable-next-line camelcase
          v7_relativeSplatPath: true,
        }}
      >
        <AppContent data-testid="content" />
      </BrowserRouter>,
    );

    const content = await findByTestId('content');
    expect(content).toBeInTheDocument();

    const homeElement = await findByText('Home');
    expect(homeElement).toBeInTheDocument();
  });
});
