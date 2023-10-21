import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Image,
  Button,
} from '@chakra-ui/react';
import 'animate.css';
import { useScrollTo } from 'react-use-window-scroll';

function Hero() {
  const scrollTo = useScrollTo();

  return (
    <Box overflow="hidden" h="auto" w="94%" ml="auto">
      <Flex
        width="full"
        height="fit-content"
        my={['1.8rem', '3.8rem']}
        align="center"
        position="relative"
        flexDirection={['column', 'row']}
      >
        <VStack
          alignItems="flex-start"
          spacing="5"
          width="full"
          height="full"
          //   pr="5rem"
        >
          <Heading
            fontSize={['1.6rem', '3rem']}
            color="brand.200"
            pos="relative"
            className="animate__animated animate__fadeInUp"
          >
            WAS YOUR <br></br> FLIGHT <Text as="span" color="#007F82" display="inline">
           DELAYED<br></br>OR CANCELLED?
            </Text>
          </Heading>
          <Button
            variant="outline"
            onClick={() => scrollTo({ top: 800, left: 0, behavior: 'smooth' })}
          >
            Get Started
          </Button>
        </VStack>
        <VStack
          alignItems="flex-start"
          height="full"
          width="full"
          pos="relative"
          mt={['4rem', '0']}
        >
          <Box
            w="full"
            height="fit-content"
            // bg="brand.200"
            borderRadius="40px"
            overflow="hidden"
            zIndex="2"
            marginLeft='-30'
          >
            <Image src="/assets/hero.jpg" objectFit="cover" height="full" />
          </Box>

          {/* <Box
            pos="absolute"
            top="-40px"
            right="40%"
            zIndex="3"
            className="animate__animated animate__fadeInUp animate__delay-3s"
          >
            <Image src="/assets/heart.png" />
          </Box>
          <Box
            pos="absolute"
            top="-25px"
            left="4%"
            zIndex="3"
            className="animate__animated animate__fadeInUp animate__delay-3s"
          >
            <Image src="/assets/zigzag.png" />
          </Box>
          <Box
            pos="absolute"
            top="17%"
            left="-1%"
            zIndex="3"
            className="animate__animated animate__fadeInLeft animate__delay-2s"
          >
            <Image src="/assets/ticket.png" />
          </Box>
          <Box
            pos="absolute"
            top="55%"
            left="-18%"
            zIndex="3"
            className="animate__animated animate__fadeInUp animate__delay-2s"
          >
            <Image src="/assets/arrow.png" />
          </Box>
          <Box
            pos="absolute"
            bottom="-9%"
            left="-9%"
            zIndex="3"
            className="animate__animated animate__fadeInUp animate__delay-2s"
          >
            <Image src="/assets/herob.png" />
          </Box>
          <Box
            pos="absolute"
            bottom="-10%"
            left="-10%"
            zIndex="3"
            className="animate__animated animate__fadeInLeft animate__delay-3s"
          >
            <Image src="/assets/thumb.png" />
          </Box>
          <Box
            pos="absolute"
            bottom="-6%"
            left="40%"
            zIndex="3"
            className="animate__animated animate__fadeInUp animate__delay-2s"
          >
            <Image src="/assets/location.png" />
          </Box>
          <Box
            pos="absolute"
            bottom="-3%"
            left="60%"
            zIndex="3"
            className="animate__animated animate__fadeInUp animate__delay-3s"
          >
            <Image src="/assets/sunset.png" />
          </Box>
          <Box
            pos="absolute"
            bottom="-3%"
            right="8%"
            zIndex="3"
            className="animate__animated animate__fadeInUp animate__delay-4s"
          >
            <Image src="/assets/clock.png" />
          </Box>
          <Box
            pos="absolute"
            bottom="40%"
            right="0%"
            zIndex="3"
            className="animate__animated animate__fadeInUp animate__delay-2s"
          >
            <Image src="/assets/heroa.png" />
          </Box> */}

          <Box
            pos="absolute"
            top={['-19%', '-15%']}
            right={['-215px', '-270px']}
            zIndex="1"
          >
            <Box
              width={['350px', '540px']}
              height={['350px', '540px']}
              bgColor="brand.100"
              borderRadius="50%"
            />
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
}

export default Hero;
