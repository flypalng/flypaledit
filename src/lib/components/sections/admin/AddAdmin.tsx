import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { PrimaryInput } from 'lib/components/Utilities/PrimaryInput';
import React from 'react';
import { Register } from 'types/api';
import { useToasts } from 'react-toast-notifications';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useOperationMethod } from 'react-openapi-client';

const schema = yup.object().shape({
  email: yup.string().required('Email is required'),
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  middleName: yup.string().required('Middle Name is required'),
  phoneNumber: yup.string().required('Phone number is required'),
});

function AddAdmin({ isOpen, onClose }: { isOpen: boolean; onClose: any }) {
  const [createAdmin, { data, loading, error }] =
    useOperationMethod('Admincreate');
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
      const result = await (await createAdmin(undefined, data)).data;
      if (result.status) {
        addToast('Admin created succesfully', {
          appearance: 'success',
          autoDismiss: true,
        });
        onClose();
        return;
      }
      addToast(result.message, { appearance: 'error', autoDismiss: true });
      onClose();
      return;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent py={5} borderRadius="0" px={5} w={['91%', '100%']}>
        <ModalHeader>
          <Text color="brand.200" fontSize="1.1rem" textAlign="center">
            Add an admin
          </Text>
        </ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing="1rem">
              <SimpleGrid columns={2} rowGap="3" columnGap="4" w="100%">
                <PrimaryInput<Register>
                  label="Email"
                  register={register}
                  error={errors.email}
                  defaultValue={''}
                  name="email"
                  disableLabel={false}
                  padding="0 1rem"
                />
                <PrimaryInput<Register>
                  label="First Name"
                  register={register}
                  error={errors.firstName}
                  defaultValue={''}
                  name="firstName"
                  disableLabel={false}
                  padding="0 1rem"
                />
                <PrimaryInput<Register>
                  label="Last Name"
                  register={register}
                  error={errors.lastName}
                  defaultValue={''}
                  name="lastName"
                  disableLabel={false}
                  padding="0 1rem"
                />
                <PrimaryInput<Register>
                  label="Middle Name"
                  register={register}
                  error={errors.middleName}
                  defaultValue={''}
                  name="middleName"
                  disableLabel={false}
                  padding="0 1rem"
                />
                <PrimaryInput<Register>
                  label="Phone Number"
                  register={register}
                  error={errors.phoneNumber}
                  defaultValue={''}
                  name="phoneNumber"
                  disableLabel={false}
                  padding="0 1rem"
                />
              </SimpleGrid>
            </VStack>
            <HStack spacing="2rem" mt="2rem">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                variant="solid"
                type="submit"
                disabled={!isValid}
                isLoading={loading}
              >
                Save
              </Button>
            </HStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AddAdmin;
