import { Box, GridItem, SimpleGrid, VStack } from '@chakra-ui/react';
import AdminStats from 'lib/components/sections/admin/AdminStats';
import ComplaintsDetails from 'lib/components/sections/admin/ComplaintsDetails';
import UserInfo from 'lib/components/sections/admin/UserInfo';
import UserMandate from 'lib/components/sections/admin/UserMandate';
import { retuurnAdminData } from 'lib/components/Utilities/Functions/utils';
import UserInfoWithComplain from 'lib/pages/Admin/UserInfoWithComplain';
import { DataAccess } from 'lib/Utils/Api';
import { GetServerSideProps } from 'next';
import React from 'react';
import { DashboardMetricsView } from 'types/api/dashboard-metrics-view';

function complainDetails({
  item,
  adminMetrics,
}: {
  item: any;
  adminMetrics: DashboardMetricsView;
}) {
  return (
    <Box mb="4rem" w="full">
      <VStack spacing={8} w="full">
        <SimpleGrid columns={2} spacing={8}>
          <GridItem colSpan={2}>
            <AdminStats metrics={adminMetrics} />
          </GridItem>
        </SimpleGrid>
        <UserInfoWithComplain display={'block'} item={item} />
        <ComplaintsDetails item={item} />
        <UserMandate item={item} />
      </VStack>
    </Box>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    data: { admin, redirect },
  } = retuurnAdminData(context);
  if (redirect)
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      props: {},
    };
  const bearer = `Bearer ${context.req.cookies.token}`;
  const _dataAccess = new DataAccess(bearer);
  const complaintsId = context?.params?.id;
  try {
    const data = (await _dataAccess.get(`/api/Complaints/get/${complaintsId}`))
      .data;

    const metrics = (await _dataAccess.get('/api/Admin/metrics')).data;
    return {
      props: {
        item: data,
        adminMetrics: metrics,
      },
    };
  } catch (error) {
    return {
      props: {
        item: [],
        adminMetrics: {},
      },
    };
  }
};
export default complainDetails;
