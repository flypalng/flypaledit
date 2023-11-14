import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Input,
  Text,
} from '@chakra-ui/react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

import NextLink from 'next/link';
import { useRouter } from 'next/router';
import MenuItems from './Props/MenuItems';
import React, { useState } from 'react';

function Footer() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Clear previous success or error messages when the user starts typing
    setIsSubmitted(false);
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add your email validation logic here.
    // For demonstration, let's assume a valid email is required.
    if (email && email.includes('@')) {
      setSuccessMessage('Thank you for subscribing!');
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter a valid email address.');
      setSuccessMessage('');
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setSuccessMessage('');
      setErrorMessage('');
    }, 5000);
  };
  // You can add your logic for handling the form submission here.
  return (
    <Box
      w="full"
      bgColor="brand.200"
      display={
        router.pathname.startsWith('/admin') ||
        router.pathname.startsWith('/user') ||
        router.pathname.startsWith('/login') ||
        router.pathname.startsWith('/auth')
          ? 'none'
          : 'block'
      }
    >
      <Container maxW="90%" pt="2rem">
        <Flex
          justify="space-between"
          alignItems={['center', 'center']}
          minH="8rem"
          flexDirection={['column', 'row']}
        >
          <Box>
            <NextLink href="/">
              <Image src="/assets/logowhite.png" w="194px" h="45px" />
            </NextLink>
          </Box>
          <Flex
            textAlign={['center', 'right']}
            flexDirection={['column', 'row']}
            my={['0', '0']}
            h={['10rem', 'unset']}
            justifyContent={['space-between', 'unset']}
          >
            <Flex flexDirection={['column', 'column']} gap={['1rem', '2rem']}>
              <MenuItems
                text="Know your rights"
                url="/rights"
                color="white"
                p={['0', '0 0 0 6rem']}
                // my={['2rem','2rem']}
              />
              <MenuItems
                text="Terms and Conditions"
                url="/Termsandconditions"
                color="white"
                p={['0', '0 0 0 6rem']}
              />
            </Flex>
            <Flex flexDirection={['column', 'column']} gap={['1rem', '2rem']}>
              <MenuItems
                text="Privacy Policy"
                url="/rights"
                color="white"
                p={['0', '0 0 0 6rem']}
              />

              <MenuItems
                text="Cookies"
                url="/rights"
                color="white"
                p={['0', '0 0 0 6rem']}
              />
            </Flex>
          </Flex>
          <Flex
          // gap={['20rem','20rem']}
          >
            {/* Newsletter Form */}
            <form onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={handleEmailChange}
                border="solid"
                borderColor={errorMessage ? 'red' : ''}
                fontSize={[10, 14]}
                width={['200', '240px']}
                sx={{
                  // width: '240px', // Adjust the width
                  height: '50px', // Adjust the height
                  // fontSize: '14px', // Adjust the font size
                  marginRight: '10px',
                }}
                // ... add other input properties
              />
              <Button
                type="submit"
                fontSize={[10, 14]}
                sx={{
                  width: '85px', // Adjust the width
                  height: '50px', // Adjust the height
                  // fontSize: '14px', // Adjust the font size
                }}
                // ... add other button properties
              >
                Subscribe
              </Button>
            </form>
            {isSubmitted && (
              <Alert
                borderRadius="md"
                position="absolute"
                w="350px"
                opacity={errorMessage || successMessage ? 1 : 0}
                transition="opacity 0.5s"
                status={errorMessage ? 'error' : 'success'}
                fontSize="sm"
                mt="50"
              >
                <AlertIcon />
                {errorMessage || successMessage}
              </Alert>
            )}
          </Flex>
        </Flex>
        <Divider display={['none', 'block']} />
        <Flex
          justify={['', 'space-between']}
          alignItems="center"
          minH="6rem"
          flexDirection={['column', 'row']}
          mt={['1rem', '0']}
        >
          <Text fontSize=".9rem" color="white">
            Copyright &copy; 2022 FlyPal
          </Text>
          <HStack spacing={5} mt={['1rem', '0']}>
            <FaFacebookF fontSize=".9rem" color="white" />
            <FaTwitter fontSize=".9rem" color="white" />
            <FaInstagram fontSize=".9rem" color="white" />
            <FaLinkedinIn fontSize=".9rem" color="white" />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
