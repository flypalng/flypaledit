import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { Widget } from '@uploadcare/react-widget';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useOperationMethod } from 'react-openapi-client';
import { useToasts } from 'react-toast-notifications';
import { UpdateUserModel } from 'types/api';

function UploadPhoto({ isOpen, onClose }: { isOpen: boolean; onClose: any }) {
  const [isAble, setIsAble] = useState(false);
  const { addToast } = useToasts();
  const [url, setUrl] = useState<string>();
  const setUrlString = (url: string) => {
    setUrl(url);
  };

  const [updateUser, { data, loading, error }] =
    useOperationMethod('Userupdate');

  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isValid },
  } = useForm<UpdateUserModel>();

  const onSubmit = async (data: UpdateUserModel) => {
    data.profilePhotoReference = url;
    try {
      const result = await updateUser(undefined, data);
      console.log({ data });
      console.log({ result });
      onClose();
      if (result.status) {
        addToast('Profile Update Successful', {
          appearance: 'success',
          autoDismiss: true,
        });

        return;
      }
      addToast('Error, Please try again', {
        appearance: 'error',
        autoDismiss: true,
      });
      return;
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (info: any) => {
    setIsAble(true);
    setUrlString(info.originalUrl);
  };
  return (
    <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent py={5} borderRadius="0" px={5} w={['91%', '100%']}>
        <ModalHeader>
          <Text color="brand.200" fontSize="1.1rem" textAlign="center">
            Edit Account Details
          </Text>
        </ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalBody>
          <form
            onSubmit={handleSubmit(onSubmit, (errors) => console.log(errors))}
          >
            <FormControl>
              <FormLabel color="brand.100" fontSize="1.1rem">
                Upload Photo
              </FormLabel>
              <Widget publicKey="fda3a71102659f95625f" onChange={onChange} />
            </FormControl>
            <HStack spacing="2rem" mt="1rem">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                variant="solid"
                disabled={!isAble ? true : false}
                type="submit"
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

export default UploadPhoto;
