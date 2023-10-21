import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';

function HeroInfo() {
  return (
    <Box w="full" mt={['16rem', '4rem']}>
      <Box
        w="full"
        bgColor="brand.800"
        bgImage="url(/assets/lines2.png)"
        minH="80px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        pos="relative"
      >
        <Container maxW="90%" pos="absolute" bottom="0">
          <Flex
            bgColor="white"
            minH="9rem"
            boxShadow="-3px 20px 30px rgba(0, 0, 0, 0.07)"
            borderRadius="5px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={[4, 20]}
            py="1rem"
            overflow={['auto', 'unset']}
          >
            <Box
              width="full"
              display="flex"
              h="full"
              alignItems="center"
              justifyContent="space-between"
              flexDirection={['column', 'row']}
            >
              <Box>
                <Text
                  fontSize=".8rem"
                  fontWeight="500"
                  color="brand.200"
                  maxW={['100%', '90%']}
                >
                  WE PROTECT AIR PASSENGER RIGHTS
                </Text>
              </Box>
              <Box display={['unset', 'contents']}>
                <Box display="flex" alignItems="center" h={['5rem', 'unset']}>
                  <Image src="assets/nig.png" h="auto" w="auto" />
                  <Text
                    fontSize=".8rem"
                    fontWeight="500"
                    color="brand.100"
                    pl=".5rem"
                  >
                    NCAA PART 19 REGULATIONS
                  </Text>
                </Box>
                <Box display="flex" alignItems="center" h={['5rem', 'unset']}>
                  <Image src="assets/eu.png" h="auto" w="auto" />
                  <Text
                    fontSize=".8rem"
                    fontWeight="500"
                    color="brand.100"
                    pl=".5rem"
                  >
                    EU REGULATION EC 261
                  </Text>
                </Box>
                <Box display="flex" alignItems="center" h={['5rem', 'unset']}>
                  <Image src="assets/mon.png" h="auto" w="auto" />
                  <Text
                    fontSize=".8rem"
                    fontWeight="500"
                    color="brand.100"
                    pl=".5rem"
                  >
                    MONTREAL CONVENTION
                  </Text>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

export default HeroInfo;
