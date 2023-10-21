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
import { PasswordReset } from 'types/api';

const schema = yup.object().shape({
  code: yup.string().required('Verification code is required'),
  newPassword: yup.string().required('New Password is required'),
});

function CompleteReset() {
  const [resetPassword, { data, loading, error }] =
    useOperationMethod('Userresetcomplete');
  const router = useRouter();
  const { addToast } = useToasts();

  const { id } = router.query;
  console.log(id);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<PasswordReset>({
    resolver: yupResolver(schema),
    defaultValues: {
      code: id as unknown as string,
    },
    mode: 'all',
  });
  const onSubmit = async (data: PasswordReset) => {
    try {
      const result = await (await resetPassword(undefined, data)).data;
      console.log(data);
      console.log({ result });
      if (result.status) {
        addToast('Password Reset Successful', {
          appearance: 'success',
          autoDismiss: true,
        });
        router.back();
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
            <SecondaryInput<PasswordReset>
              register={register}
              name="newPassword"
              error={errors.newPassword}
              defaultValue=""
              label="New Password"
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
            Reset Password
          </Button>
        </Flex>
      </VStack>
    </form>
  );
}

export default CompleteReset;
