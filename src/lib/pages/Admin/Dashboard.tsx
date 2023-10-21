import { Box, Flex, GridItem, HStack, SimpleGrid } from '@chakra-ui/react';
import AdminGraphs from 'lib/components/sections/admin/AdminGraphs';
import AdminStats from 'lib/components/sections/admin/AdminStats';
import AdminUserChart from 'lib/components/sections/admin/AdminUserChart';
import ComplaintsTable from 'lib/components/sections/admin/ComplaintsTable';
import UserTable from 'lib/components/sections/admin/UserTable';
import { DailyComplaintCount, DashboardMetricsView, UserView } from 'types/api';
import { MonthlyUserView } from 'types/api/monthly-user-view';

function Dashboard({
  users,
  adminMetrics,
  complains,
  charts,
  pendingChart,
  resolvedChart,
}: {
  users: UserView;
  adminMetrics: DashboardMetricsView;
  complains: any;
  charts: MonthlyUserView[];
  pendingChart: DailyComplaintCount[];
  resolvedChart: DailyComplaintCount[];
}) {
  return (
    <Box mb="4rem">
      <SimpleGrid columns={2} spacing={8}>
        <GridItem colSpan={2}>
          <AdminStats metrics={adminMetrics} />
        </GridItem>
        <GridItem colSpan={2}>
          <AdminUserChart
            name="New user Survey"
            option="New user"
            charts={charts}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <HStack columnGap={5} flexDirection={['column', 'row']}>
            <AdminGraphs
              name="Resolved complaint"
              option="Current month"
              charts={resolvedChart}
            />
            <AdminGraphs
              name="Pending complaint"
              option="Current month"
              charts={pendingChart}
            />
          </HStack>
        </GridItem>
        <GridItem colSpan={2}>
          <ComplaintsTable complains={complains} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default Dashboard;
