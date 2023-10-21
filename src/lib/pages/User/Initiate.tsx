import { Box, Flex, Image, VStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import CompleteReset from './CompleteReset';
import InitiateEmail from './InitiateEmail';

function Initiate() {
  return (
    <Flex
      w="100%"
      minH="100vh"
      bgColor="brand.800"
      bgImage="url(/assets/lines2.png)"
    >
      <Flex w="190px" pos="absolute" left="4rem" top="2rem">
        <Image src="../assets/logoblue.png" w="full" />
      </Flex>
      <Box
        w="60%"
        display={['none', 'flex']}
        justifyContent="center"
        alignItems="center"
      >
        <Image src="../assets/admin.png" />
      </Box>
      <Box
        w={['100%', '40%']}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box w={['full', '80%']} mr="auto">
          <VStack justify="center">
            <Box textAlign="center" mt="3rem !important">
              <Text fontWeight="600" fontSize="2rem">
                Reset Password
              </Text>
              <Text></Text>
            </Box>
          </VStack>

          <InitiateEmail />
        </Box>
      </Box>
    </Flex>
  );
}

export default Initiate;
