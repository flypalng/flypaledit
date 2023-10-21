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
  Tr,
} from '@chakra-ui/react';
import { TableData, TableHead, TableStatus } from 'lib/layout/Props/Tables';
import { MdFilterList } from 'react-icons/md';
import Pagination from './Pagination';
const moment = require('moment');

function UserTable({ complains }: { complains: any }) {
  const complaints = complains.value;

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
        <Text fontSize="1.1rem">Complaints</Text>
        <Icon as={MdFilterList} fontSize="1.1rem" />
      </Flex>
      <TableContainer h="500px" overflowY="hidden">
        <Table variant="simple">
          <Thead>
            <Tr w="full" bgColor="#EFEFEF" h="3rem">
              <TableHead title="Name" />
              <TableHead title="Destination" />
              <TableHead title="Departure" />
              <TableHead title="Complain type" />
              <TableHead title="Date" />
            </Tr>
          </Thead>

          <Tbody>
            {complaints.map((x: any) => {
              return (
                <Tr>
                  <TableData name={x.user.fullName} />
                  <TableData name={x.departureLocation} />
                  <TableData name={x.finalDestination} />
                  <TableData name={x.complaintsCategory} />
                  <TableData
                    name={moment(x.departureDate).format('MMM Do YYYY')}
                  />
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination data={complains} />
    </Box>
  );
}

export default UserTable;
