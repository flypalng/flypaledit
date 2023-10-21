import { Box, Flex, Image, VStack, Text, Circle, Icon } from '@chakra-ui/react';
import LogoutModal from 'lib/components/sections/admin/Modals/LogoutModal';
import AdminMenu from 'lib/layout/Props/AdminMenu';
import NextLink from 'next/link';
import { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const [opened, setOpened] = useState(true);
  const openMobileMenu = () => {
    setOpened(!opened);
  };
  return (
    <Box
      w={['80%', '20%']}
      pos="fixed"
      h="full"
      bgColor="brand.100"
      zIndex={'6'}
      borderRadius="8px 4px 22px rgba(0, 0, 0, 0.2)"
      transition="all .3s ease-in-out"
      left={[opened ? '-100%' : '0', 'unset']}
    >
      <Flex w="106px" ml="3rem" my="3rem">
        <Image src="/assets/logow.png" w="full" />
      </Flex>
      <Circle
        size="1.5rem"
        top="10%"
        bg="black"
        pos="absolute"
        right={opened ? '-34%' : '-3.5%'}
        onClick={() => openMobileMenu()}
        display={['flex', 'none']}
        justifyContent="center"
        zIndex="7"
      >
        <Icon as={FiChevronRight} color="white" />
      </Circle>
      <VStack align="flex-start" onClick={() => openMobileMenu()}>
        <AdminMenu text="Dashboard" url="/admin/dashboard" />
        <AdminMenu text="Users" url="/admin/users" />
        <AdminMenu text="Complaints" url="/admin/complaints" />
        <AdminMenu text="Settings" url="/admin/settings" />
        <Text
          borderColor="brand.100"
          color="white"
          p="1rem 0 1rem 3rem"
          w="100%"
          fontSize="1rem"
          onClick={() => openModal()}
          cursor="pointer"
          _hover={{ textDecoration: 'underline' }}
        >
          Log out
        </Text>
      </VStack>
      <LogoutModal isOpen={isOpen} onClose={closeModal} />
    </Box>
  );
}

export default SideNav;
