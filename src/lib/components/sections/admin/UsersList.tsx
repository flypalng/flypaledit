import {
  Box,
  Flex,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  toast,
  Tr,
} from '@chakra-ui/react';
import { TableData, TableHead, TableStatus } from 'lib/layout/Props/Tables';
import Link from 'next/link';
import { MdFilterList } from 'react-icons/md';
import Pagination from './Pagination';

function UsersList({ users }: { users: any }) {
  const uniqueUser = users.value;

  return (
    <Box
      w="full"
      minH="500px"
      bgColor="white"
      boxShadow="0px 20px 30px rgba(0, 0, 0, 0.07)"
      borderRadius="5"
      p=" 1rem 0"
    >
      <Flex
        justify="space-between"
        align="center"
        w="full"
        h="3rem"
        px="2.5rem"
      >
        <Text fontSize="1.1rem">User</Text>
        <Icon as={MdFilterList} fontSize="1.1rem" />
      </Flex>
      <TableContainer h="500px" overflowY="hidden">
        <Table variant="simple">
          <Thead>
            <Tr w="full" bgColor="#EFEFEF" h="3rem">
              <TableHead title="Email" />
              <TableHead title="First Name" />
              <TableHead title="Last Name" />
              <TableHead title="Phone Number" />
              {/* <TableHead title="User Id" /> */}
            </Tr>
          </Thead>
          <Tbody>
            {uniqueUser.map((user: any) => {
              return (
                <Link href={'/admin/users/' + user.id} key={user.id}>
                  <Tr>
                    <TableData name={user.email} />
                    <TableData name={user.firstName} />
                    <TableData name={user.lastName} />
                    <TableData name={user.phoneNumber} />
                    {/* <TableStatus name={user.id} /> */}
                  </Tr>
                </Link>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination data={users} />
    </Box>
  );
}

export default UsersList;
