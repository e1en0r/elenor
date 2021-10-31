import React, { cloneElement, lazy, Suspense, useCallback, useContext } from 'react';
import { ForwardProps, ModalContext } from '@phork/phorkit';
import { ModalLoader } from 'modals/ModalLoader';

const CreditsModal = lazy(() => import('modals/CreditsModal'));
const MODAL_ID = 'credits';

export type CreditsButtonProps<E extends React.ElementType> = Partial<React.ComponentPropsWithoutRef<E>> & {
  children: React.ReactElement;
};

export const CreditsButton = <E extends React.ElementType>({
  children,
  ...props
}: CreditsButtonProps<E>): React.ReactElement => {
  const { createModal } = useContext(ModalContext);

  const handleClick = useCallback(() => {
    createModal(
      <ForwardProps>
        {props => (
          <Suspense fallback={<ModalLoader size="medium" />}>
            <CreditsModal id={MODAL_ID} {...props} />
          </Suspense>
        )}
      </ForwardProps>,
    );
  }, [createModal]);

  return cloneElement(children, {
    onClick: handleClick,
    ...props,
  });
};

CreditsButton.displayName = 'CreditsButton';
