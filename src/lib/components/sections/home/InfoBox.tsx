import { Box, Container, Flex, Grid, Image, Text } from '@chakra-ui/react';
import Slider from 'lib/components/Slider';

function InfoBox() {
  return (
    <Box w="full" mt="4rem">
      <Box
        w="full"
        bgColor="brand.200"
        bgImage="url(/assets/lines.png)"
        h={['135px', '80px']}
        display="flex"
        justifyContent="center"
        alignItems="center"
        pos="relative"
        mb={['-0.5rem', '0']}
      >
        <Container maxW="90%" pos="absolute" bottom={['50px', '0']}>
          <Flex
            bgColor="white"
            minH="9rem"
            boxShadow="-3px 20px 30px rgba(0, 0, 0, 0.07)"
            borderRadius="5px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={[0, 20]}
            py="1rem"
          >
            <Box
              width="full"
              display="flex"
              h="full"
              alignItems="center"
              flexDirection={['column', 'row']}
            >
              <Text
                w={['100%', '15%']}
                color="brand.200"
                fontSize={['1rem', '1.3rem']}
                fontWeight="800"
                textAlign={['center', 'left']}
              >
                DO YOU KNOW THAT:
              </Text>
              <Box
                pos="relative"
                w={['80%', '75%']}
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="full"
                ml={['0', '2rem']}
              >
                <Box pos="absolute" top="0" left="0">
                  <Image src="assets/quote.png" maxW={['45%', '100%']} />
                </Box>
                <Box as="div" w="100%" height="7rem">
                  <Slider />
                </Box>
                <Box
                  pos="absolute"
                  bottom="0"
                  right="0"
                  transform="scale(-1, 1)"
                >
                  <Image src="assets/quote.png" maxW={['45%', '100%']} />
                </Box>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

export default InfoBox;
