import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { MonthlyUserView } from 'types/api/monthly-user-view';
import LineChart from './Charts/LineChart';

function AdminUserChart({
  name,
  option,
  charts,
}: {
  name: string;
  option: string;
  charts: MonthlyUserView[];
}) {
  return (
    <Flex
      w="full"
      bgColor="white"
      borderRadius="8px"
      boxShadow="0px 12px 26px rgba(16, 30, 115, 0.06)"
      align="center"
      justify="center"
      py="2rem"
      px="2rem"
      minH="300px"
    >
      <Box w="full" mx="auto">
        <Flex justify="space-between" w="full">
          <Text fontSize="20px" fontWeight="600" color="#25282B">
            {name}
          </Text>
          <Text fontSize="12px" fontWeight="600" color="#A0A4AB">
            {option}
          </Text>
        </Flex>
        <Box w="full" h="300px" mt="1rem">
          <LineChart charts={charts} />
        </Box>
      </Box>
    </Flex>
  );
}

export default AdminUserChart;
