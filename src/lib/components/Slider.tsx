import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Slider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      showDots={true}
      arrows={false}
      autoPlay
      infinite
    >
      <Text
        textAlign="center"
        fontSize={['.9rem', '1rem']}
        w={['85%', '70%']}
        mx="auto"
      >
        Since 2019, 1 billion flights has been cancelled "10k flights were
        delayed"
      </Text>
      <Text
        textAlign="center"
        fontSize={['.9rem', '1rem']}
        w={['85%', '70%']}
        mx="auto"
      >
        The first craft big enough to hold a person was built in 1852 and was
        powered by wind
      </Text>
      <Text
        textAlign="center"
        fontSize={['.9rem', '1rem']}
        w={['85%', '70%']}
        mx="auto"
      >
        On New Year's Day of 1914, the first scheduled passenger airline took
        its maiden flight.
      </Text>
      <Text
        textAlign="center"
        fontSize={['.9rem', '1rem']}
        w={['85%', '70%']}
        mx="auto"
      >
        On long-haul flights, cabin crew can work 16-hour days. To help combat
        fatigue.
      </Text>
    </Carousel>
  );
}

export default Slider;
