import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Abouthelp from 'lib/components/sections/about/Abouthelp';

function LodgeComplaintModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: any;
}) {
  const router = useRouter();
  return (
    <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent py={0} borderRadius="0" px={0} w={['full']} maxW="76rem">
        <ModalCloseButton />
        <Abouthelp />
      </ModalContent>
    </Modal>
  );
}
export default LodgeComplaintModal;
