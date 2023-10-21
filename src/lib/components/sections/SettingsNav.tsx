import { Button, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import AddAdmin from './admin/AddAdmin';

function SettingsNav() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Flex w="full" justify="space-between" align="center" mt="1rem">
      <Text fontWeight="700" fontSize="1rem">
        Account
      </Text>
      <Button variant="solid" onClick={() => openModal()}>
        Invite Admin
      </Button>
      <AddAdmin isOpen={isOpen} onClose={closeModal} />
    </Flex>
  );
}

export default SettingsNav;
