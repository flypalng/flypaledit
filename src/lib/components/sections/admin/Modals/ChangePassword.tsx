import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { PrimaryInput } from 'lib/components/Utilities/PrimaryInput';
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { PasswordResetModel } from 'types/api';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useOperationMethod } from 'react-openapi-client';
const schema = yup.object().shape({
  existingPassword: yup.string().required('Existing Password is required'),
  newPassword: yup.string().required('New Password is required'),
});

function ChangePassword({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: any;
}) {
  const [changePassword, { data, loading, error }] =
    useOperationMethod('Userpasswordupdate');
  const { addToast } = useToasts();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<PasswordResetModel>({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const onSubmit = async (data: PasswordResetModel) => {
    try {
      const result = await (await changePassword(undefined, data)).data;
      if (result.status) {
        addToast('Password update Successful', {
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
            Change Password
          </Text>
        </ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <PrimaryInput<PasswordResetModel>
              label="Current Password"
              register={register}
              error={errors.existingPassword}
              defaultValue=""
              name={'existingPassword'}
              placeholder="Enter Password"
              padding="0 1rem"
            />
            <PrimaryInput<PasswordResetModel>
              label="New Password"
              register={register}
              error={errors.newPassword}
              defaultValue=""
              name={'newPassword'}
              placeholder="Enter Password"
              padding="0 1rem"
            />
            <HStack spacing="2rem" mt="1rem">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                variant="solid"
                type="submit"
                isLoading={loading}
                disabled={!isValid}
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
export default ChangePassword;
