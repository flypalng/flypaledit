import {
  Box,
  Flex,
  Image,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  Link,
  Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { LoginModel } from 'types/api';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useOperationMethod } from 'react-openapi-client';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { UserContext } from 'lib/Utils/MainContext';
import { useToasts } from 'react-toast-notifications';
import { SecondaryInput } from 'lib/components/Utilities/SecondaryInput';
import Cookies from 'js-cookie';

const schema = yup.object().shape({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
});

function Authentication() {
  const [logUserIn, { data, loading, error }] =
    useOperationMethod('Admintoken');
  const router = useRouter();
  const { setAdmin } = useContext(UserContext);
  const { addToast } = useToasts();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<LoginModel>({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const onSubmit = async (data: LoginModel) => {
    try {
      const result = await logUserIn(undefined, data);
      // console.log(data);
      const value = result.data;
      console.log({ value });
      if (value.status) {
        addToast('Login Successful', {
          appearance: 'success',
          autoDismiss: true,
        });
        setAdmin(value.data);
        Cookies.set('token', value.data.token);
        Cookies.set('admin', 'true');
        Cookies.set('adminData', JSON.stringify(value.data));
        window.location.href = '/admin/dashboard';
        return;
      }
      addToast(value.message, { appearance: 'error', autoDismiss: true });
      return;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Flex
      w="100%"
      h="100vh"
      bgColor="brand.800"
      bgImage="url(/assets/lines2.png)"
    >
      <Box
        w="60%"
        display={['none', 'flex']}
        justifyContent="center"
        alignItems="center"
      >
        <Image src="assets/admin.png" />
      </Box>
      <Box
        w={['100%', '40%']}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box w={['full', '80%']} mr="auto">
          <VStack justify="center">
            <Flex w="190px">
              <Image src="assets/logoblue.png" w="full" />
            </Flex>
            <Box fontSize="1rem" textAlign="center" mt="3rem !important">
              <Text fontWeight="600">Welcome!</Text>
              <Text> Enter details to login</Text>
            </Box>
          </VStack>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <VStack
              background="rgba(223, 248, 249, .2)"
              boxShadow={['0', '-3px 20px 30px rgba(0, 0, 0, 0.07)']}
              borderRadius="5px"
              w="100%"
              mx="auto"
              p="3rem"
              mt="2rem"
            >
              <SimpleGrid columns={2} rowGap="3" columnGap="4" w="100%">
                <GridItem colSpan={2}>
                  <SecondaryInput<LoginModel>
                    register={register}
                    name="email"
                    error={errors.email}
                    defaultValue=""
                    label="Email"
                    type="email"
                    placeholder="Chigozie"
                  />
                </GridItem>
                <GridItem colSpan={2}>
                  <SecondaryInput<LoginModel>
                    register={register}
                    name="password"
                    error={errors.password}
                    defaultValue=""
                    label="Password"
                    placeholder="Chigozie"
                    type={'password'}
                  />
                </GridItem>
              </SimpleGrid>
              <Flex
                justify="space-between"
                align="center"
                mt="2rem !important"
                w="100%"
                flexDirection={['column', 'row']}
              >
                <NextLink href="/login/reset" passHref>
                  <Link>Forgot Password</Link>
                </NextLink>
                <Button
                  variant="solid"
                  type="submit"
                  isLoading={loading}
                  disabled={!isValid}
                  mt={['2rem', '0']}
                >
                  Login
                </Button>
              </Flex>
            </VStack>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default Authentication;
