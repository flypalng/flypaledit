import {
  Box,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  SimpleGrid,
} from '@chakra-ui/react';
import { PrimaryInput } from 'lib/components/Utilities/PrimaryInput';
import { UserContext } from 'lib/Utils/MainContext';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { ComplaintsModel } from 'types/api';

function First({ register, errors }: { register: any; errors: any }) {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <Box w={['full', '60%']} mx="auto">
      <SimpleGrid
        columns={2}
        rowGap="3"
        columnGap="4"
        w="100%"
        mt={['0 !important', '2rem !important']}
        background={['unset', 'rgba(226, 232, 240, 0.3)']}
        borderRadius="5px"
        p="2rem"
      >
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel color="brand.100" fontSize="1.1rem">
              Email
            </FormLabel>
            <Input placeholder="23/02/2022" disabled />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel color="brand.100" fontSize="1.1rem">
              First Name
            </FormLabel>
            <Input placeholder="23/02/2022" disabled />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel color="brand.100" fontSize="1.1rem">
              Last Name
            </FormLabel>
            <Input placeholder="23/02/2022" disabled />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2} display="block">
          <PrimaryInput<ComplaintsModel>
            label="Complaint ID"
            register={register}
            error={errors.complaintsSubCategoryId}
            defaultValue={router.asPath.replace('/getstarted/', '').slice(-1)}
            name={'complaintsCategoryId'}
            // disableLabel={true}
          />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default First;
