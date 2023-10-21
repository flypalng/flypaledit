import { Box, Flex } from '@chakra-ui/react';
import SideNav from 'lib/pages/Admin/SideNav';
import TopNav from 'lib/pages/Admin/TopNav';
import UserTopNav from 'lib/pages/Admin/UserTopNav';
import UserSideNav from 'lib/pages/User/SideNav';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <>
      {router.pathname.startsWith('/admin') ? (
        <Flex pos="relative" minH="100vh">
          <SideNav />
          <Box w={['full', '80%']} h="full" bg="#f4f8fb" as="main" ml="auto">
            <Box as="div" w="95%" mx="auto" minH="100vh">
              <TopNav />
              {children}
            </Box>
          </Box>
        </Flex>
      ) : router.pathname.startsWith('/user') ? (
        <Flex pos="relative" minH="100vh">
          <UserSideNav />
          <Box w={['full', '80%']} h="full" bg="#f4f8fb" as="main" ml="auto">
            <Box as="div" w="95%" mx="auto" minH="100vh">
              <UserTopNav />
              {children}
            </Box>
          </Box>
        </Flex>
      ) : (
        <Box margin="0 auto" transition="0.5s ease-out">
          <Header />
          <Box as="main">{children}</Box>
          <Footer />
        </Box>
      )}
    </>
  );
};

export default Layout;
