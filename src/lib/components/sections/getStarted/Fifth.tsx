import { Box, Button, Circle, Icon, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { HiOutlineCheck } from 'react-icons/hi';
import 'animate.css';

function Fifth() {
  return (
    <Box w="90%" mt="3rem" mx="auto">
      <Box
        w="100%"
        bgColor="FBFFFF"
        h="860px"
        boxShadow="0px 2px 46px rgba(0, 127, 130, 0.06)"
        display="flex"
        justifyContent="center"
        pos="relative"
      >
        <Box w="full" mt="10rem">
          <Circle
            size={['300px', '388px']}
            bgColor="rgba(0, 127, 130, 0.05)"
            display="flex"
            alignItems="center"
            mx="auto"
            justifyContent="center"
            pos="relative"
          >
            <Circle
              size="60%"
              bgColor="brand.100"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Circle
                size="50%"
                bgColor="brand.500"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon
                  as={HiOutlineCheck}
                  w="full"
                  h="full"
                  color="white"
                  p=".5rem"
                />
              </Circle>
            </Circle>
            <Box
              pos="absolute"
              top="-15%"
              right="35%"
              className="animate__animated animate__fadeInDown animate__delay-1s"
            >
              <Image src="/assets/zagyellow.png" />
            </Box>
            <Box
              pos="absolute"
              top="5%"
              right="-9%"
              transform="rotate(-22.57deg)"
              className="animate__animated animate__fadeInRight animate__delay-1s"
            >
              <Image src="/assets/arrow.png" />
            </Box>
            <Box
              pos="absolute"
              top="40%"
              right="-15%"
              transform="rotate(-90deg)"
              className="animate__animated animate__fadeInDown animate__delay-1s"
            >
              <Image src="/assets/zagblue.png" />
            </Box>
            <Box
              pos="absolute"
              bottom="10%"
              right="-2%"
              transform="rotate(-22.57deg)"
              className="animate__animated animate__fadeInDown animate__delay-1s"
            >
              <Image src="/assets/zigzag.png" />
            </Box>
            <Box
              pos="absolute"
              bottom="-10%"
              left="40%"
              transform="rotate(51.16deg)"
              className="animate__animated animate__fadeInUp animate__delay-1s"
            >
              <Image src="/assets/arrow.png" />
            </Box>
            <Box
              pos="absolute"
              bottom="5%"
              left="-2%"
              transform="rotate(68.27deg)"
              className="animate__animated animate__fadeInDown animate__delay-1s"
            >
              <Image src="/assets/zagblue.png" />
            </Box>
            <Box
              pos="absolute"
              top="50%"
              left="-20%"
              transform="matrix(-0.94, -0.34, -0.34, 0.94, 0, 0)"
              className="animate__animated animate__fadeInLeft animate__delay-1s"
            >
              <Image src="/assets/arrow.png" />
            </Box>
            <Box
              pos="absolute"
              top="20%"
              left="-10%"
              transform="rotate(-37.8deg);"
              className="animate__animated animate__fadeInDown animate__delay-1s"
            >
              <Image src="/assets/zagblue.png" />
            </Box>
            <Box
              pos="absolute"
              top="-5%"
              left="10%"
              className="animate__animated animate__fadeInDown animate__delay-1s"
            >
              <Image src="/assets/zigzag.png" />
            </Box>
          </Circle>
          <Box
            pos="absolute"
            top="-4%"
            right="-5%"
            className="animate__animated animate__fadeIn animate__delay-2s"
          >
            <Box
              width="80px"
              height="80px"
              border="25px solid rgba(252, 193, 63, 0.61)"
              borderRadius="50%"
            />
          </Box>
          <Text
            fontSize="16px"
            color="brand.200"
            textAlign="center"
            w={['full', '70%']}
            mx="auto"
            mt="7rem"
            mb="3rem"
          >
            Your complaint has been registered and will be worked upon by our
            customer service agents. Please Check your dashboard to see the
            progress of your complaints.
          </Text>
          <Box mx="auto" w="fit-content">
            <Link href="/user/dashboard">
              <Button variant="solid" bgColor="brand.200">
                Go back Home
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Fifth;
