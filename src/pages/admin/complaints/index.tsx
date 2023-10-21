import { Box } from '@chakra-ui/react';
import ComplaintsTable from 'lib/components/sections/admin/ComplaintsTable';
import { retuurnAdminData } from 'lib/components/Utilities/Functions/utils';
import { DataAccess } from 'lib/Utils/Api';
import { GetServerSideProps } from 'next';

function index({ complains }: { complains: any }) {
  return (
    <Box my="3rem">
      <ComplaintsTable complains={complains} />
    </Box>
  );
}

export default index;
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
    const complainList = (await _dataAccess.get(`/api/Complaints/list?${url}`))
      .data;
    return {
      props: {
        complains: complainList,
      },
    };
  } catch (error) {
    return {
      props: {
        complains: [],
      },
    };
  }
};
