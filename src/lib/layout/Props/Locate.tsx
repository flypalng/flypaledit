import { GridItem, Text } from '@chakra-ui/react';
import React from 'react';

function Locate({ area }: { area: string }) {
  return (
    <GridItem w="100%">
      <Text fontSize={['.7rem', '1.1rem']} fontWeight="bold" color="brand.200">
        {area}
      </Text>
    </GridItem>
  );
}

export default Locate;
