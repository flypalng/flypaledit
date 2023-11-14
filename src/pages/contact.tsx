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
   // Function to handle the email button click
   const handleEmailClick = () => {
    // You can use the 'window.location' object to open the default email client
    window.location.href = 'mailto:askus@flypal.ng';
  };

  // Function to handle the call button click
  const handleCallClick = () => {
    // You can use the 'window.location' object to initiate a phone call
    window.location.href = 'tel:+2347034110627'; // Replace with the desired phone number
  };

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
        <VStack w="full" h="full">
          <Box
            width="full"
            h="800px"
            bg="linear-gradient(0.22deg, #1B345B 7.56%, rgba(27, 52, 91, 0) 158.89%), url(/assets/contact.png)"
            display="flex"
            flexDirection="column"
            // justifyContent="space-between"
            p="5rem 0"
            marginBottom={['-12rem','0rem']}
            justifyContent="center"  /* Center vertically */
            alignItems="center"      /* Center horizontally */
            sx={{
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              
            }}
            
            
            // background-size='cover'
  // background-position= 'center'
  // background-repeat= 'no-repeat'
          >
             <VStack
          // w="full"
          align={['center', 'flex-start']}
          ml={['0', '4rem']}
          mb={['2rem', '0']}
        >
          <Text
            fontSize={{ base: '2rem', md: '2rem' }}
            color="brand.100"
            w={['80%', 'full']}
            // mb={5}
            textAlign={['center', 'center']}

          >
            Say hi! 👋
          </Text>
          <Text
            fontSize={['18px', '18px']}
            color="black"
            w={['80%', 'full']}
            textAlign={['center', 'center']}
          >
            Send us a note and we’ll get back to you as soon as possible.
          </Text>
         
        {/* Buttons for email and call */}
       
          <Box textAlign={['center', 'center']}
          w={['80%', 'full']}
          ><Button onClick={handleEmailClick}>Email Us</Button></Box>
        <Box
        textAlign={['center', 'center']}
        w={['80%', 'full']}
        ><Button onClick={handleCallClick}>Call Us</Button></Box>
        </VStack>
          </Box>
        </VStack>
       
      </Flex>
    </Flex>
   
  );
}

export default contact;
