import { Flex, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';

type CardsType = {
  name: string;
  url: string;
};
function Airlines({ name, url }: CardsType) {
  return (
    <GridItem w="100%">
      <Flex align="center" flexDirection={['column', 'row']}>
        <Image src={url} />
        <Text fontSize={['.7rem', '.8rem']} color="brand.600" pl=".3rem">
          {name}
        </Text>
      </Flex>
    </GridItem>
  );
}

export default Airlines;
