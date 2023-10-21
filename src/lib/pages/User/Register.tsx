import {
  Flex,
  VStack,
  SimpleGrid,
  GridItem,
  Text,
  Button,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useOperationMethod } from 'react-openapi-client';
import { useRouter } from 'next/router';
import { useToasts } from 'react-toast-notifications';
import { SecondaryInput } from 'lib/components/Utilities/SecondaryInput';
import { Register } from 'types/api';

const phoneRegExp = /^([0]{1})[0-9]{10}$/;
const schema = yup.object().shape({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  phoneNumber: yup.string().matches(phoneRegExp, 'Invalid phone number'),
});

function Register({
  toggleForms,
  setVerify,
}: {
  toggleForms: any;
  setVerify: any;
}) {
  const [RegsiterUser, { data, loading, error }] =
    useOperationMethod('Userregister');
  const { addToast } = useToasts();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<Register>({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const onSubmit = async (data: Register) => {
    try {
      const result = await (await RegsiterUser(undefined, data)).data;
      console.log(result);
      if (result.status) {
        localStorage.setItem('email', result.data.email);
        setVerify(true);
        return;
      }
      addToast(result.message, { appearance: 'error', autoDismiss: true });
      return;
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
          <GridItem colSpan={[2, 1]}>
            <SecondaryInput<Register>
              register={register}
              name="email"
              error={errors.email}
              defaultValue=""
              label="Email"
              type="email"
              placeholder="Chigozie@gmail.com"
            />
          </GridItem>
          <GridItem colSpan={[2, 1]}>
            <SecondaryInput<Register>
              register={register}
              name="firstName"
              error={errors.firstName}
              defaultValue=""
              label="First Name"
              type="text"
              placeholder="Chigozie"
            />
          </GridItem>
          <GridItem colSpan={[2, 1]}>
            <SecondaryInput<Register>
              register={register}
              name="lastName"
              error={errors.lastName}
              defaultValue=""
              label="Last Name"
              type="text"
              placeholder="Eze"
            />
          </GridItem>
          <GridItem colSpan={[2, 1]}>
            <SecondaryInput<Register>
              register={register}
              name="middleName"
              error={errors.middleName}
              defaultValue=""
              label="Middle Name"
              type="text"
              placeholder="Chukwu"
            />
          </GridItem>
          <GridItem colSpan={[2, 1]}>
            <SecondaryInput<Register>
              register={register}
              name="phoneNumber"
              error={errors.phoneNumber}
              defaultValue=""
              label="Phone Number"
              placeholder="0800000000000"
              type="text"
            />
          </GridItem>
          <GridItem colSpan={[2, 1]}>
            <SecondaryInput<Register>
              register={register}
              name="password"
              error={errors.password}
              defaultValue=""
              label="Password"
              placeholder="Chigozie"
              type="password"
            />
          </GridItem>
        </SimpleGrid>
        <Text
          textAlign="center"
          pt="1rem"
          cursor="pointer"
          onClick={toggleForms}
        >
          Already have an account?
        </Text>
        <Flex
          justify="flex-end"
          align="center"
          mt="2rem !important"
          w="100%"
          flexDirection={['column', 'row']}
        >
          <Button
            variant="solid"
            type="submit"
            isLoading={loading}
            disabled={!isValid}
            mt={['2rem', '0']}
            w="full"
          >
            Register
          </Button>
        </Flex>
      </VStack>
    </form>
  );
}

export default Register;
