import { Box, GridItem, HStack, SimpleGrid } from '@chakra-ui/react';
import { DashboardMetricsView } from 'types/api';
import UserDashboardTable from './UserDashboardTable';
import UserMetrics from './UserMetrics';

function UserDashboard({ complains, item }: { complains: any; item: any }) {
  return (
    <Box mb="4rem">
      <SimpleGrid columns={2} spacing={8}>
        <GridItem colSpan={2}>
          <UserMetrics item={item} />
        </GridItem>
        <GridItem colSpan={2}>
          <UserDashboardTable complains={complains} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default UserDashboard;
