import { Box, Flex, Heading, VStack, Text, Image } from '@chakra-ui/react';
import React from 'react';

function AboutTemp() {
  return (
    <Box height="auto">
      <Box
        h="auto"
        py="2rem"
        bgColor="brand.800"
        bgImage="url(/assets/lines2.png)"
      >
        <Flex
          width="90%"
          mx="auto"
          height="fit-content"
          align="center"
          position="relative"
          flexDirection={['column-reverse', 'row']}
        >
          <VStack
            alignItems="flex-start"
            height="full"
            width="full"
            pos="relative"
          >
            <Box
              w="auto"
              height="auto"
              overflow="hidden"
              zIndex="2"
              mt={['2rem', '0']}
            >
              <Image src="/assets/abt.png" objectFit="cover" height="full" />
            </Box>
            <Box pos="absolute" bottom="-140px" left="50px" zIndex="3">
              <Image src="/assets/dotsb.png" />
            </Box>
            <Box pos="absolute" top="-50px" right="0" zIndex="3">
              <Box
                width="100px"
                height="100px"
                border="30px solid rgba(5, 156, 159, 0.36)"
                borderRadius="50%"
              />
            </Box>
            <Box pos="absolute" bottom="0px" right="90px" zIndex="3">
              <Box
                width="100px"
                height="100px"
                bgColor="brand.100"
                borderRadius="43px 0px 39px 34px"
                transform="rotate(68.73deg)"
              />
            </Box>
          </VStack>
          <VStack
            alignItems={['center', 'flex-start']}
            spacing="10"
            width="full"
            height="full"
            ml={['0', '6rem']}
            pr={['0', '5rem']}
          >
            <Heading
            fontSize={['2rem', '2.5rem']}
            textAlign={['center', 'left']}
            color="brand.200"
            pos="relative"
            _after={{
              position: 'absolute',
              width: '70%',
              height: '12px',
              backgroundColor: 'brand.500',
              bottom: '-12px',
              left: ['50%', '0'],
              transform: ['translate(-50%)', 'translate(0%)'],
              content: '""',
            }}
          >
            Who we are
          </Heading>
            <Text fontSize="1rem" fontWeight="regular" w="95%">
              FlyPal has a mission to put smiles on the faces of all passengers
              by helping to solve all their flying challenges. All flying
              passengers must know their rights and we have positioned ourselves
              as the catalyst to disseminate these rights and help get all
              compensation that they are entitled to. <br />
              <br />
              Between reaching out to airline companies regarding the
              compensations available for passengers. We also educate the
              passengers on the laws governing these compensations.
            </Text>
            <Box pos="absolute" bottom="-80px" right="10%" zIndex="3">
              <Box
                width="100px"
                height="100px"
                border="30px solid rgba(252, 193, 63, 0.61)"
                borderRadius="50%"
              />
            </Box>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
}

export default AboutTemp;
