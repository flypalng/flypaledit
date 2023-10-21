import {
  Box,
  Container,
  Flex,
  VStack,
  Text,
  GridItem,
  Grid,
  Image,
} from '@chakra-ui/react';
import Airlines from 'lib/layout/Props/Airlines';
import Locate from 'lib/layout/Props/Locate';
import React from 'react';

function Locations() {
  return (
    <Box w="full" bgColor="white">
      <Container maxW="90%">
        <Flex
          width="full"
          height="fit-content"
          my="4rem"
          align="start"
          position="relative"
          flexDirection={['column', 'row']}
        >
          <VStack alignItems="flex-start" height="full" width={['100%', '60%']}>
            <Flex
              align="center"
              justify="center"
              bgColor="brand.800"
              h="34px"
              borderRadius="5px"
              px="2rem"
              mb="1rem"
              mx={['auto', 'unset']}
            >
              <Text fontSize=".8rem" color="brand.200">
                All the airlines we support
              </Text>
            </Flex>
            <Grid
              templateColumns="repeat(3, 1fr)"
              columnGap="4rem"
              rowGap="2rem"
              mx={['auto !important', '0 !important']}
              as="div"
            >
              <Airlines name="Air Peace" url="assets/airpeace.png" />
              <Airlines name="Arik Air" url="assets/arik.png" />
              <Airlines name="Azman Air" url="assets/azman.png" />
              <Airlines name="Dana Air" url="assets/dana.png" />
              <Airlines name="EgyptAir" url="assets/egypt.png" />
              <Airlines name="Air Peace" url="assets/airpeace.png" />
              <Airlines name="Arik Air" url="assets/arik.png" />
              <Airlines name="Dana Air" url="assets/dana.png" />
            </Grid>
          </VStack>
          <VStack alignItems="flex-start" height="full" width={['100%', '50%']}>
            <Flex
              align="center"
              justify="center"
              bgColor="brand.800"
              h="34px"
              borderRadius="5px"
              px="2rem"
              mb="1rem"
              mx={['auto', 'unset']}
              mt={['2.5rem', '0']}
            >
              <Text fontSize=".8rem" color="brand.200" mx={['auto', 'unset']}>
                Locations
              </Text>
            </Flex>
            <Grid
              as="div"
              templateColumns="repeat(3, 1fr)"
              columnGap="4rem"
              mx={['auto !important', '0 !important']}
              rowGap="2rem"
            >
              <Locate area="Lagos" />
              <Locate area="PortHarcout" />
              <Locate area="Abuja" />
              <Locate area="Kano" />
              <Locate area="Warri" />
              <Locate area="Owerri" />
              <Locate area="PortHarcout" />
              <Locate area="Abuja" />
              <Locate area="Kano" />
            </Grid>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Locations;
