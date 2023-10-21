import {
  Box,
  Circle,
  Container,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FaClipboardList } from 'react-icons/fa';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

function Services() {
  return (
    <Box
      w="full"
      bgColor="brand.200"
      bgImage="url(/assets/lines.png)"
      minH="400px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      pb={['3rem', '0']}
      pt={['1rem', '0']}
    >
      <Container maxW="90%">
        <Box w="full">
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            gap={['4rem', '7rem']}
          >
            <GridItem w="100%">
              <Flex
                flexDirection={['row', 'column']}
                justifyContent="center"
                align="center"
              >
                <Circle
                  size="80px"
                  bg="brand.700"
                  color="brand.600"
                  mb={[0, 4]}
                >
                  <FaClipboardList fontSize="2rem" />
                </Circle>
                <Box ml={['1rem', '0']}>
                  <Text
                    fontSize={['1rem', '1.1rem']}
                    fontWeight="600"
                    textAlign={['left', 'center']}
                    color="white"
                  >
                    Enter flight details
                  </Text>
                  <Text
                    fontSize={['.8rem', '1rem']}
                    fontWeight="400"
                    textAlign={['left', 'center']}
                    color="white"
                  >
                    Submit your flight details. And we check if the airlines’
                    owes you money.
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem w="100%">
              <Flex
                flexDirection={['row', 'column']}
                justifyContent="center"
                align="center"
              >
                <Circle
                  size="80px"
                  bg="brand.700"
                  color="brand.600"
                  mb={[0, 4]}
                >
                  <FiEdit fontSize="2rem" />
                </Circle>
                <Box ml={['1rem', '0']}>
                  <Text
                    fontSize={['1rem', '1.1rem']}
                    fontWeight="600"
                    textAlign={['left', 'center']}
                    color="white"
                  >
                    We work on your behalf
                  </Text>
                  <Text
                    fontSize={['.8rem', '1rem']}
                    fontWeight="400"
                    textAlign={['left', 'center']}
                    color="white"
                  >
                    Our claim experts do the rest of the work (ask for
                    compensation) on behalf of you.
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem w="100%">
              <Flex
                flexDirection={['row', 'column']}
                justifyContent="center"
                align="center"
              >
                <Circle
                  size="80px"
                  bg="brand.700"
                  color="brand.600"
                  mb={[0, 4]}
                >
                  <MdAccountBalanceWallet fontSize="2rem" />
                </Circle>
                <Box ml={['1rem', '0']}>
                  <Text
                    fontSize={['1rem', '1.1rem']}
                    fontWeight="600"
                    textAlign={['left', 'center']}
                    color="white"
                  >
                    Get paid in your Bank
                  </Text>
                  <Text
                    fontSize={['.8rem', '1rem']}
                    fontWeight="400"
                    textAlign={['left', 'center']}
                    color="white"
                  >
                    Your compensation will be directly transferred to your bank
                    account.
                  </Text>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Services;
