import { Box, VStack } from '@chakra-ui/react';
import UserComplaints from 'lib/components/sections/admin/UserComplaints';
import UserInfo from 'lib/components/sections/admin/UserInfo';
import UserStats from 'lib/components/sections/admin/UserStats';
import { GetServerSideProps } from 'next';
import { DataAccess } from 'lib/Utils/Api';
import { retuurnAdminData } from 'lib/components/Utilities/Functions/utils';

function index({ item, complaints }: { item: any; complaints: any }) {
  return (
    <Box mb="4rem" w="full">
      <VStack spacing={8} w="full">
        <UserStats item={item} />
        <UserInfo display={'none'} item={item} />
        <UserComplaints complaints={complaints} />
      </VStack>
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
  const id = context?.params?.id;
  const { url } = context.query;

  try {
    const data = (await _dataAccess.get(`/api/Admin/user/get/${id}`)).data;
    const complainData = (
      await _dataAccess.get(`/api/Admin/complain/list/user/${id}?${url}`)
    ).data;

    return {
      props: {
        item: data,
        complaints: complainData,
      },
    };
  } catch (error) {
    return {
      props: {
        item: {},
        complaints: [],
      },
    };
  }
};
