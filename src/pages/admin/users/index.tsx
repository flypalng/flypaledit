import { retuurnAdminData } from 'lib/components/Utilities/Functions/utils';
import Users from 'lib/pages/Admin/Users';
import { DataAccess } from 'lib/Utils/Api';
import { GetServerSideProps } from 'next';
import React from 'react';

function users({ users, charts }: { users: any; charts: any }) {
  return <Users users={users} charts={charts} />;
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
    const userlist = (await _dataAccess.get(`/api/user/list?${url}`)).data;
    const complainList = (
      await _dataAccess.get(`/api/Complaints/list/user?${url}`)
    ).data;
    const userChart = (await _dataAccess.get('/api/Admin/chart/users')).data;

    return {
      props: {
        users: userlist,
        charts: userChart,
        complains: complainList,
      },
    };
  } catch (error) {
    return {
      props: {
        users: [],
        charts: {},
        complains: [],
      },
    };
  }
};

export default users;
