import Authentication from 'lib/pages/Admin/Authentication';
import { GetServerSidePropsContext } from 'next';

function index() {
  return <Authentication />;
}

export default index;

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const { admin } = ctx.req.cookies;
  if (admin)
    return {
      redirect: {
        permanent: false,
        destination: '/admin/dashboard',
      },
    };

  return {
    props: {},
  };
};
