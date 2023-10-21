import {
  Flex,
  VStack,
  SimpleGrid,
  GridItem,
  Link,
  Text,
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

function Login({ toggleForms }: { toggleForms: any }) {
  const [logUserIn, { data, loading, error }] = useOperationMethod('Usertoken');
  const router = useRouter();
  const { setUser } = useContext(UserContext);
  const { addToast } = useToasts();

  // const userToken = Cookies.get('user');
  // // useEffect(() => {
  // //   if (userToken === 'true') {
  // //     router.push('/user/dashboard');
  // //   }
  // // });

  const handleAfterLogin = () => {
    if (router.query && router.query.from) {
      router.push(router.query.from as unknown as string);
    } else {
      // router.push('/user/dashboard');
      window.location.href = '/user/dashboard';
    }
  };
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
      const result = await (await logUserIn(undefined, data)).data;
      console.log(result);
      if (result.status) {
        addToast('Login Successful', {
          appearance: 'success',
          autoDismiss: true,
        });
        setUser(result.data);
        Cookies.set('token', result.data.token);
        Cookies.set('user', 'true');
        Cookies.set('userData', JSON.stringify(result.data));
        // router.push('/user/dashboard');
        handleAfterLogin();
        return;
      }
      addToast(result.message, { appearance: 'error', autoDismiss: true });
      return;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <VStack
          background="rgba(223, 248, 249, .2)"
          boxShadow={['0', '-3px 20px 30px rgba(0, 0, 0, 0.07)']}
          borderRadius="5px"
          w="100%"
          mx="auto"
          p="3rem"
          mt="0rem"
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
            <NextLink href="/auth/reset" passHref>
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
      <Text
        textAlign="center"
        mt="1.5rem"
        cursor="pointer"
        onClick={toggleForms}
      >
        New user? Please Register
      </Text>
    </>
  );
}

export default Login;
