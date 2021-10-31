import { useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { Flex, Link, Modal, ModalBody, ModalFooter, ModalHeader, Typography, Rhythm, ModalProps } from '@phork/phorkit';
import { IconCredits } from 'components/IconCredits';
import { HeartIcon } from 'icons/HeartIcon';

export type CreditsModalProps = Omit<ModalProps, 'children' | 'focusable' | 'size'> & { id?: string };

const CreditsModal = ({ id: initId, ...props }: CreditsModalProps): JSX.Element => {
  const id = initId || uuid();
  const contentRef = useRef<HTMLDivElement>(null);
  const version = process.env.__VERSION__;

  return (
    <Modal focusable contextId={id} size="medium" {...props}>
      <ModalHeader key="header" modalId={id} title="Credits" />
      <ModalBody scrollable key="content" ref={contentRef}>
        <IconCredits />
      </ModalBody>
      <ModalFooter bordered key="footer">
        <Typography as="div" color="primary" size="medium" variants={['letter-spacing-comfy', 'line-height-comfy']}>
          <Rhythm mx={1} my={1}>
            <Flex wrap alignItems="center" direction="row" justifyContent="space-between">
              <Rhythm grouped mr={2}>
                {version ? ` v${version}` : null}
              </Rhythm>

              <Typography as={Flex} justifyContent="center" variants="line-height-comfy">
                Built with love
                <Rhythm mx={1}>
                  <Typography color="danger">
                    <HeartIcon size={18} />
                  </Typography>
                </Rhythm>
                and
                <Rhythm ml={1}>
                  <Link href="https://phorkit.phork.org/" rel="noopener noreferrer" target="_blank">
                    Phork/it
                  </Link>
                </Rhythm>
              </Typography>
            </Flex>
          </Rhythm>
        </Typography>
      </ModalFooter>
    </Modal>
  );
};

// default exports are required for react suspense
export default CreditsModal;
