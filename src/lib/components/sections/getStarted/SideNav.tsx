import { VStack, Text, Box, Flex } from '@chakra-ui/react';
import SideNavLinks from 'lib/layout/Props/SideNavLinks';
import React from 'react';

type Steps = {
  step: number;
  isValid: boolean;
};
function SideNav({ step, isValid }: Steps) {
  return (
    <Box
      w="30%"
      bgColor="brand.100"
      height="auto"
      bgImage="../assets/getstart.png"
      bgPos="bottom"
      bgRepeat="no-repeat"
      pos="absolute"
      h="100%"
      display={['none', 'block']}
    >
      <Flex w="full" mt="6rem" justify="center">
        <VStack spacing={14} alignItems="flex-start">
          <SideNavLinks
            step={step}
            isValid={isValid}
            steps={0}
            name="Personal information"
          />
          <SideNavLinks
            step={step}
            isValid={isValid}
            steps={1}
            name="Flight details"
          />
          <SideNavLinks
            step={step}
            isValid={isValid}
            steps={2}
            name="Document"
          />
          <SideNavLinks step={step} isValid={isValid} steps={4} name="Finish" />
        </VStack>
      </Flex>
    </Box>
  );
}

export default SideNav;
