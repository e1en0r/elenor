import styled from '@emotion/styled';
import { LineLoader, Modal, ModalBody, ModalProps } from '@phork/phorkit';

const StyledModalBody = styled(ModalBody)`
  height: 200px;
`;

export type ModalLoaderProps = {
  size: ModalProps['size'];
};

export const ModalLoader = ({ size, ...props }: ModalLoaderProps): React.ReactElement => {
  return (
    <Modal focusable size={size} {...props}>
      <StyledModalBody>
        <LineLoader position="top" />
      </StyledModalBody>
    </Modal>
  );
};

ModalLoader.displayName = 'ModalLoader';
