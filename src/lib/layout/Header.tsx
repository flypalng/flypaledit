import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react';
import { UserContext } from 'lib/Utils/MainContext';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import MenuItems from './Props/MenuItems';
import Cookies from 'js-cookie';

function Header() {
  const router = useRouter();
  const [opened, setOpened] = useState(true);

  const user = Cookies.get('user');
  const openMobileMenu = () => {
    setOpened(!opened);
  };

  return (
    <Box
      w="full"
      bgColor="white"
      display={
        router.pathname.startsWith('/admin') ||
        router.pathname.startsWith('/user') ||
        router.pathname.startsWith('/login') ||
        router.pathname.startsWith('/auth')
          ? 'none'
          : 'block'
      }
    >
      <Container maxW="90%">
        <Flex justify="space-between" alignItems="center" h="6rem" zIndex="5">
          <Box cursor="pointer" w={['95px', '126px']}>
            <NextLink href="/">
              <Image src="/assets/logoblue2.png" w="full" h="auto" />
            </NextLink>
          </Box>
          <Box
            pos={['absolute', 'unset']}
            display={['flex', 'block']}
            flexDirection="column"
            top="120px"
            left={opened ? '-100%' : '25%'}
            zIndex="5"
            transition="all .3s ease-in-out"
            h={['40vh', 'unset']}
            justifyContent="space-between"
            onClick={() => openMobileMenu()}
            textAlign={['center', 'left']}
          >
            <Box d={['block', 'none']}>
              <MenuItems
                text="Home"
                url="/"
                color="brand.200"
                p={['0', '0 2rem .2rem 0']}
              />
            </Box>
            <MenuItems
              text="Know your rights"
              url="/rights"
              color="brand.200"
              p={['0', '0 2rem .2rem 0']}
            />
            <MenuItems
              text="About"
              url="/about"
              color="brand.200"
              p={['0', '0 2rem .2rem 0']}
            />
            <MenuItems
              text="FAQs"
              url="/faqs"
              color="brand.200"
              p={['0', '0 2rem .2rem 0']}
            />
            <MenuItems
              text="Contact Us"
              url="/contact"
              color="brand.200"
              p={['0', '0 2rem .2rem 0']}
            />
            <>
              {user ? (
                <Box display={{ base: 'block', md: 'none' }}>
                  <MenuItems
                    text="Login"
                    url="/user/dashboard"
                    color="brand.200"
                    p={['0', '0 0rem .2rem 2rem']}
                  />
                </Box>
              ) : (
                <Box display={{ base: 'block', md: 'none' }}>
                  <MenuItems
                    text="Login"
                    url="/user"
                    color="brand.200"
                    p={['0', '0 0rem .2rem 2rem']}
                  />
                </Box>
              )}
            </>
            {/* <NextLink href="/">
              <Box display={{ base: 'block', md: 'none' }}>
                <Button
                px="0rem, 2rem"
                  variant="outline"
                  cursor="pointer"
                  // display={router.pathname === '/contact' ? 'none' : 'initial'}
                  onClick={() => scrollTo({ top: 800, left: 0, behavior: 'smooth' })}
                >
                  check compensation
                </Button>
              </Box>
            </NextLink> */}
          </Box>
          <Box>
            <Flex alignItems="center">
              <Flex alignItems="center">
                <Image src="/assets/nig.png" h="auto" w="auto" />
                <Text pl=".3rem">NGN</Text>
              </Flex>
              <Box
                ml="2rem"
                display={['block', 'none']}
                onClick={() => openMobileMenu()}
              >
                {opened ? (
                  <CgMenuRight fontSize="2rem" />
                ) : (
                  <FaTimes fontSize="2rem" fontWeight="400" />
                )}
              </Box>
              <>
                {user === 'true' ? (
                  <Box display={{ base: 'none', md: 'block' }}>
                    <MenuItems
                      text="Dashboard"
                      url="/user/dashboard"
                      color="brand.200"
                      p={['0', '0 0rem .2rem 2rem']}
                    />
                  </Box>
                ) : (
                  <Box display={{ base: 'none', md: 'block' }}>
                    <MenuItems
                      text="Login"
                      url="/auth"
                      color="brand.200"
                      p={['0', '0 0rem .2rem 2rem']}
                    />
                  </Box>
                )}
              </>

              <Box display={{ base: 'none', md: 'block' }}>
                <Button
                  variant="outline"
                  cursor="pointer"
                  ml="2rem"
                  px="0, 2rem"
                  fontSize={15}
                  // variant="outline"
                  onClick={() =>
                    scrollTo({ top: 800, left: 0, behavior: 'smooth' })
                  }
                >
                  check compensation
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Box
          display={{ base: 'block', md: 'none' }}
          pos="absolute"
          left={opened ? '-100%' : '0'}
          transition="all .3s ease-in-out"
          h="100vh"
          bg="white"
          w="100%"
          zIndex="4"
        ></Box>
      </Container>
    </Box>
  );
}

export default Header;
