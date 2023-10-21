import { Box, Circle, Flex, GridItem, Icon, Text } from '@chakra-ui/react';
import shadeColor from 'lib/components/Utilities/Functions/ColorShade';
import React from 'react';

type AdminCards = {
  color: string;
  title: string;
  sub?: number;
  icon: any;
};
function AdminCard({ color, title, sub, icon }: AdminCards) {
  return (
    <GridItem w="100%" h="full">
      <Flex
        as="div"
        bgColor="white"
        w="full"
        h="118px"
        boxShadow="0px 9px 30px -6px rgba(0, 0, 0, 0.07)"
        borderRadius="8px"
        align="center"
        px=".7rem"
      >
        <Circle size="45px" overflow="hidden" bg={shadeColor(color, 0.1)}>
          <Icon as={icon} color={color} fontSize="20px" pos="relative" />
        </Circle>
        <Box as="div" pl="1.2rem">
          <Text fontWeight="500" fontSize="1rem">
            {title}
          </Text>
          <Text fontWeight="400" fontSize=".9rem" color={color}>
            {sub}
          </Text>
        </Box>
      </Flex>
    </GridItem>
  );
}

export default AdminCard;
