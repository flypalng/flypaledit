import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaFileUpload } from 'react-icons/fa';
import { ComplaintsView } from 'types/api';
import { saveAs } from 'file-saver';
import { useToasts } from 'react-toast-notifications';
const moment = require('moment');

function UserMandate({ item }: { item: ComplaintsView }) {
  const [showDownload, setShowDownload] = useState(false);
  const { addToast } = useToasts();
  const saveFile = () => {
    if (item.mandateFormReference != null) {
      saveAs(item.mandateFormReference as unknown as string, 'mandate.pdf');
      setShowDownload(false);
      return;
    }
    addToast('No mandate file found', {
      appearance: 'error',
      autoDismiss: true,
    });
    setShowDownload(false);
  };
  return (
    <Box
      bg="white"
      borderRadius="8px"
      boxShadow="0px 9px 30px -6px rgba(0, 0, 0, 0.07)"
      w="100%"
      p="1.5rem 2rem"
    >
      <Text fontWeight="700" fontSize="1rem" mb="1.5rem">
        Document
      </Text>
      <Flex align="flex-start" color="brand.200" mb=".5rem">
        <Box w="60%" as="div">
          <Flex align="center">
            <Icon as={FaFileUpload} color="brand.100" />
            <Text
              fontWeight="400"
              fontSize=".9rem"
              color="brand.200"
              ml=".5rem"
            >
              mandate-form.pdf
            </Text>
          </Flex>
        </Box>
        <Box w="40%" as="div">
          <Flex justify="space-between" align="start" pos="relative">
            <Text fontWeight="400" fontSize=".9rem" color="brand.200">
              {moment(item.departureDate).format('MMM Do YYYY')}
            </Text>
            <Box onClick={() => setShowDownload(!showDownload)}>
              <Icon as={BsThreeDotsVertical} cursor="pointer" />
            </Box>
            <Box
              pos="absolute"
              right="0"
              bgColor="white"
              p="1rem"
              bottom="100%"
              display={showDownload ? 'block' : 'none'}
              boxShadow="0 0 5px rgba(0,0,0,0.1)"
              cursor="pointer"
              onClick={() => saveFile()}
            >
              <Text fontSize=".8rem">Download</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default UserMandate;
