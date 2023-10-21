import Dashboard from 'lib/pages/Admin/Dashboard';
import { GetServerSideProps } from 'next';
import { DashboardMetricsView, UserView } from 'types/api';
import { DataAccess } from 'lib/Utils/Api';
import { retuurnAdminData } from 'lib/components/Utilities/Functions/utils';

function dashboard({
  users,
  adminMetrics,
  complains,
  charts,
  resolvedChart,
  pendingChart,
}: {
  users: UserView;
  adminMetrics: DashboardMetricsView;
  complains: any;
  charts: any;
  pendingChart: any;
  resolvedChart: any;
}) {
  return (
    <Dashboard
      users={users}
      adminMetrics={adminMetrics}
      complains={complains}
      charts={charts}
      pendingChart={pendingChart}
      resolvedChart={resolvedChart}
    />
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
  const { url } = context.query;

  try {
    const userlist = (await _dataAccess.get('/api/user/list')).data;
    const userChart = (await _dataAccess.get('/api/Admin/chart/users')).data;
    const pendingChart = (
      await _dataAccess.get('/api/Admin/chart/complaints/pending')
    ).data;
    const resolvedChart = (
      await _dataAccess.get('/api/Admin/chart/complaints/resolved')
    ).data;
    const complainList = (await _dataAccess.get(`/api/Complaints/list?${url}`))
      .data;
    const metrics = (await _dataAccess.get('/api/Admin/metrics')).data;

    return {
      props: {
        users: userlist,
        charts: userChart,
        pendingChart,
        resolvedChart,
        adminMetrics: metrics,
        complains: complainList,
      },
    };
  } catch (error) {
    return {
      props: {
        users: [],
        charts: {},
        pendingChart: {},
        resolvedChart: {},
        adminMetrics: {},
        complains: [],
      },
    };
  }
};

export default dashboard;
