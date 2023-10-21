import { retuurnUserData } from 'lib/components/Utilities/Functions/utils';
import UserPage from 'lib/pages/User/UserPage';
import { GetServerSidePropsContext } from 'next/types';
import React from 'react';

function index() {
  return <UserPage />;
}

export default index;

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const { user } = ctx.req.cookies;
  if (user)
    return {
      redirect: {
        permanent: false,
        destination: '/user/dashboard',
      },
    };

  return {
    props: {},
  };
};
