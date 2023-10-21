import { Box, Text } from '@chakra-ui/react';
import React from 'react';

function Third() {
  return (
    <Box w="90%" mx="auto">
      <Text w={['95%', '70%']} mx="auto" textAlign="center" color="brand.100">
        Kindly download the document, print, sign, scan and click proceed to
        upload it back to us
      </Text>
      <Box h="700px" w="full" bgColor="gray" mb="3rem" mt="2rem" />
    </Box>
  );
}

export default Third;
