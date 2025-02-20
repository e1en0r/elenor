import { ModalContext, ModalContextValue } from '@phork/phorkit';
import { CreditsButton } from 'components/CreditsButton';
import { fireEvent, render } from '../utils';

describe('<CreditsButton />', () => {
  it('renders a button', () => {
    const { getByText } = render(
      <CreditsButton>
        <button>Credits</button>
      </CreditsButton>,
    );

    expect(getByText('Credits')).toBeTruthy();
  });

  it('triggers a modal on click', () => {
    const createModal = jest.fn();

    const { getByTestId } = render(
      <ModalContext.Provider value={{ createModal } as unknown as ModalContextValue}>
        <CreditsButton>
          <button data-testid="button">Credits</button>
        </CreditsButton>
      </ModalContext.Provider>,
    );

    const button = getByTestId('button');
    fireEvent.click(button);

    expect(createModal).toHaveBeenCalledTimes(1);
  });
});
