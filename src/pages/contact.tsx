import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { PrimaryInput } from 'lib/components/Utilities/PrimaryInput';
import { useToasts } from 'react-toast-notifications';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { PrimaryTextarea } from 'lib/components/Utilities/Textarea';
import { ContactData } from 'types/AppTypes';

const schema = yup.object().shape({
  email: yup.string().required('Email is required'),
  name: yup.string().required('Name is required'),
  message: yup.string().required('Message is required'),
  phone: yup.string().required('Phone Number is required'),
});

function contact() {
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<ContactData>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = async (data: ContactData) => {
    // data.message = message;
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      setLoading(true);
      const result = await response.json();
      if (result.status) {
        addToast('Message sent Successful', {
          appearance: 'success',
          autoDismiss: true,
        });
        setLoading(false);
        // setOpen(false);
        // setMessage('');
        return;
      }
    } catch (error) {
      console.error({ error });
      setLoading(false);
      addToast('An error occurred while submitting your message', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };
  return (
    <Flex
      align="center"
      // w='full'
      // h="100vh"
      overflow="hidden"
      // bg={['rgba(226, 232, 240, 0.3)', 'unset']}
      py={['1rem', '0']}
      // pb={['10rem']}
      // marginBottom={['0rem','10rem']}
    >
      <Flex alignItems="center" w="full">
        <VStack w="full" h="full" display={['none', 'flex']}>
          <Box
            width="full"
            h="800px"
            bg="linear-gradient(0.22deg, #1B345B 7.56%, rgba(27, 52, 91, 0) 158.89%), url(/assets/contact.png)"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p="5rem 0"
          >
          </Box>
        </VStack>
        <VStack
          w="full"
          align={['center', 'flex-start']}
          ml={['0', '4rem']}
          mb={['2rem', '0']}
        >
          <Text
            fontSize={{ base: '2rem', md: '2rem' }}
            color="brand.100"
            // mb={5}
            textAlign={['center', 'left']}
          >
            Say hi! 👋
          </Text>
          <Text
            fontSize={['18px', '18px']}
            color="black"
            w={['80%', 'full']}
            textAlign={['center', 'left']}
          >
            Send us a note and we’ll get back to you as soon as possible.
          </Text>
          <form
            onSubmit={handleSubmit(onSubmit, (errors) => console.log(errors))}
          >
            <SimpleGrid
              columns={2}
              rowGap="4"
              columnGap={['2', '4']}
              w={['full', '90%']}
              mt="2rem !important"
            >
              <GridItem
                colSpan={2}
                background={['unset', 'rgba(226, 232, 240, 0.3)']}
                borderRadius="5px"
                p={['.5rem 2rem', '1rem 2rem']}
              >
                <PrimaryInput<ContactData>
                  register={register}
                  name="email"
                  error={errors.email}
                  defaultValue=""
                  label="Email"
                  placeholder="Chigozie@gmail.com"
                  padding="1rem"
                  w="0"
                />
              </GridItem>
              <GridItem colSpan={2}>
                <SimpleGrid
                  columns={2}
                  rowGap="3"
                  columnGap={['2', '2']}
                  w="full"
                  background={['unset', 'rgba(226, 232, 240, 0.3)']}
                >
                  <GridItem
                    colSpan={[2, 1]}
                    background={['unset', 'unset']}
                    borderRadius="5px"
                    p={['.5rem 2rem', '1rem 2rem']}
                  >
                    <PrimaryInput<ContactData>
                      register={register}
                      name="name"
                      error={errors.name}
                      defaultValue=""
                      label="Full name"
                      placeholder="Chigozie"
                      padding="1rem"
                      w="0"
                    />
                  </GridItem>
                  <GridItem
                    colSpan={[2, 1]}
                    background={['unset', 'unset']}
                    borderRadius="5px"
                    p={['.5rem 2rem', '1rem 2rem']}
                  >
                    <PrimaryInput<ContactData>
                      register={register}
                      name="phone"
                      error={errors.phone}
                      defaultValue=""
                      label="Phone Number"
                      padding="1rem"
                      placeholder="0800000000000"
                      w="0"
                    />
                  </GridItem>
                </SimpleGrid>
              </GridItem>
              <GridItem
                colSpan={2}
                background={['unset', 'rgba(226, 232, 240, 0.3)']}
                borderRadius="5px"
                p={['.5rem 2rem', '1rem 2rem']}
              >
                <PrimaryTextarea<ContactData>
                  label="Message"
                  register={register}
                  error={errors.message}
                  defaultValue={''}
                  placeholder="Type your message here"
                  name="message"
                />
              </GridItem>
              <GridItem colSpan={2}>
                <Flex
                  w="full"
                  justify={['center', 'flex-end']}
                  mt={['2rem', '0']}
                >
                  <Button
                    variant="solid"
                    type="submit"
                    isLoading={loading}
                    // disabled={!isValid}
                  >
                    Proceed
                  </Button>
                </Flex>
              </GridItem>
            </SimpleGrid>
          </form>
        </VStack>
      </Flex>
    </Flex>
   
  );
}

export default contact;
