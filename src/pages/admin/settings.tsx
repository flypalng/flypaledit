import { Button, Flex, VStack } from '@chakra-ui/react';
import AdminInfo from 'lib/components/sections/admin/AdminInfo';
import SettingsDetails from 'lib/components/sections/admin/SettingsDetails';
import SettingsNav from 'lib/components/sections/SettingsNav';
import { GetServerSidePropsContext } from 'next';
import { retuurnAdminData } from 'lib/components/Utilities/Functions/utils';

function settings() {
  return (
    <VStack spacing={8}>
      <SettingsNav />
      <AdminInfo />
      <SettingsDetails />
    </VStack>
  );
}

export default settings;

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const {
    data: { admin, redirect },
  } = retuurnAdminData(ctx);

  if (redirect)
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      props: {},
    };

  return {
    props: {
      admin,
    },
  };
};
