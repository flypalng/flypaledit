import {
  Flex,
  VStack,
  SimpleGrid,
  GridItem,
  Text,
  Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useOperationMethod } from 'react-openapi-client';
import { useRouter } from 'next/router';
import { useToasts } from 'react-toast-notifications';
import { SecondaryInput } from 'lib/components/Utilities/SecondaryInput';
import { UserverifyUserTokenEmailParameters } from 'types/api';
import { Parameters } from 'openapi-client-axios';

const schema = yup.object().shape({
  token: yup.string().required('Verification code is required'),
});

function Verify() {
  const [verifyUser, { data, loading, error }] = useOperationMethod(
    'UserverifyUser{token}{email}'
  );
  const router = useRouter();
  const { addToast } = useToasts();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<UserverifyUserTokenEmailParameters>({
    resolver: yupResolver(schema),
    defaultValues: { email: localStorage.getItem('email') },
    mode: 'all',
  });
  const onSubmit = async (data: UserverifyUserTokenEmailParameters) => {
    try {
      const params: Parameters = {
        token: data.token as string,
        email: data.email as string,
      };
      const result = await (await verifyUser(params)).data;
      console.log(data);
      console.log({ result });
      if (result.status) {
        addToast('Verification Successful', {
          appearance: 'success',
          autoDismiss: true,
        });
        window.location.reload();
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
          <GridItem colSpan={2}>
            <SecondaryInput<UserverifyUserTokenEmailParameters>
              register={register}
              name="token"
              error={errors.token}
              defaultValue=""
              label="Verification Code"
              type="text"
              placeholder=""
            />
          </GridItem>
        </SimpleGrid>
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
            Verify
          </Button>
        </Flex>
      </VStack>
    </form>
  );
}

export default Verify;
