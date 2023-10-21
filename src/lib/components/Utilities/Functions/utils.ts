import { GetServerSidePropsContext } from 'next';

export const retuurnAdminData = (ctx: GetServerSidePropsContext) => {
  const { adminData, admin } = ctx.req.cookies;
  return {
    data: {
      admin: adminData,
      redirect: !admin,
    },
  };
};

export const retuurnUserData = (ctx: GetServerSidePropsContext) => {
  const { userData, user } = ctx.req.cookies;
  return {
    data: {
      user: userData,
      redirect: !user,
    },
  };
};
