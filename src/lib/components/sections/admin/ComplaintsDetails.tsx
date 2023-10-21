import {
  Box,
  Button,
  Circle,
  color,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ComplaintsView } from 'types/AppTypes';
// import { ComplaintsView } from 'types/api';
const moment = require('moment');

function ComplaintsDetails({ item }: { item: ComplaintsView }) {
  console.log({ item });

  return (
    <Box
      bg="white"
      borderRadius="8px"
      boxShadow="0px 9px 30px -6px rgba(0, 0, 0, 0.07)"
      w="100%"
      p="1.5rem 2rem"
    >
      <Text fontWeight="700" fontSize="1rem" mb="1.5rem">
        Flight details
      </Text>
      {item.complaintsCategory == 'CANCELLED' ? (
        <Flex
          align="flex-start"
          color="brand.200"
          flexDirection={['column', 'row']}
        >
          <Box w={['full', '60%']} as="div">
            <HStack
              align="flex-start"
              spacing="3rem"
              flexDirection={['column', 'row']}
            >
              <VStack as="div" align="flex-start" spacing={[1, 4]}>
                <Text fontWeight="500" fontSize="1rem">
                  Departing from?
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {item.departureLocation?.airportLocation}
                </Text>
                <Text fontWeight="500" fontSize="1rem">
                  Final destination
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {item.finalDestination}
                </Text>
              </VStack>
              <VStack
                as="div"
                align="flex-start"
                spacing={[1, 4]}
                my={['1rem !important', '0 !important']}
                marginInlineStart={['0 !important', '3rem !important']}
              >
                <Text fontWeight="500" fontSize="1rem">
                  Do you have any connecting flights?
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {item.connectingFlights == true ? 'Yes' : 'No'}
                </Text>
                <Text fontWeight="500" fontSize="1rem">
                  Departure date
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {moment(item.departureDate).format('MMM Do YYYY')}
                </Text>
              </VStack>
            </HStack>
          </Box>
          <Box w={['full', '40%']} as="div">
            <VStack as="div" align="flex-start" spacing={[1, 4]}>
              <Text fontWeight="500" fontSize="1rem">
                Sorry for the cancellation. When did you arrive at the airport?
              </Text>
              <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                {item.arrivalTime}
              </Text>
              <Text fontWeight="500" fontSize="1rem">
                How far in advance did the airline notify you of the
                cancellation?
              </Text>
              <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                {item.notificationPeriod}
              </Text>
            </VStack>
          </Box>
        </Flex>
      ) : item.complaintsCategory == 'DELAY' ? (
        <Flex
          align="flex-start"
          color="brand.200"
          flexDirection={['column', 'row']}
        >
          <Box w={['full', '60%']} as="div">
            <HStack
              align="flex-start"
              spacing="3rem"
              flexDirection={['column', 'row']}
            >
              <VStack as="div" align="flex-start" spacing={[1, 4]}>
                <Text fontWeight="500" fontSize="1rem">
                  Departing from?
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {item.departureLocation}
                </Text>
                <Text fontWeight="500" fontSize="1rem">
                  Final destination
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {item.finalDestination}
                </Text>
              </VStack>
              <VStack
                as="div"
                align="flex-start"
                spacing={[1, 4]}
                my={['1rem !important', '0 !important']}
                marginInlineStart={['0 !important', '3rem !important']}
              >
                <Text fontWeight="500" fontSize="1rem">
                  Do you have any connecting flights?
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {item.connectingFlights == true ? 'Yes' : 'No'}
                </Text>
                <Text fontWeight="500" fontSize="1rem">
                  Departure date
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {moment(item.departureDate).format('MMM Do YYYY')}
                </Text>
              </VStack>
            </HStack>
          </Box>
          <Box w={['full', '40%']} as="div">
            <VStack as="div" align="flex-start" spacing={[1, 4]}>
              <Text fontWeight="500" fontSize="1rem">
                Sorry for the delay. When did you arrive at the airport?
              </Text>
              <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                {item.arrivalTime}
              </Text>
              <Text fontWeight="500" fontSize="1rem">
                Which of your flight was delayed?
              </Text>
              <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                {item.delayedFlight}
              </Text>
            </VStack>
          </Box>
        </Flex>
      ) : item.complaintsCategory == 'DENIED' ? (
        <Flex
          align="flex-start"
          color="brand.200"
          flexDirection={['column', 'row']}
        >
          <Box w={['full', '60%']} as="div">
            <HStack
              align="flex-start"
              spacing="3rem"
              flexDirection={['column', 'row']}
            >
              <VStack as="div" align="flex-start" spacing={[1, 4]}>
                <Text fontWeight="500" fontSize="1rem">
                  Departing from?
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {item.departureLocation}
                </Text>
                <Text fontWeight="500" fontSize="1rem">
                  Final destination
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {item.finalDestination}
                </Text>
              </VStack>
              <VStack
                as="div"
                align="flex-start"
                spacing={[1, 4]}
                my={['1rem !important', '0 !important']}
                marginInlineStart={['0 !important', '3rem !important']}
              >
                <Text fontWeight="500" fontSize="1rem">
                  Do you have any connecting flights?
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {item.connectingFlights == true ? 'Yes' : 'No'}
                </Text>
                <Text fontWeight="500" fontSize="1rem">
                  Departure date
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {moment(item.departureDate).format('MMM Do YYYY')}
                </Text>
              </VStack>
            </HStack>
            <HStack
              align="flex-start"
              spacing="3rem"
              mt="1.2rem"
              flexDirection={['column', 'row']}
            >
              <VStack as="div" align="flex-start" spacing={[1, 4]}>
                <Text fontWeight="500" fontSize="1rem">
                  Any additional information that would help us process your
                  claim faster
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {item.additionalInformation
                    ? item.additionalInformation
                    : 'none'}
                </Text>
              </VStack>
            </HStack>
          </Box>
          <Box w={['full', '40%']} as="div">
            <VStack as="div" align="flex-start" spacing={[1, 4]}>
              <Text fontWeight="500" fontSize="1rem">
                Enter Boarding Pass
              </Text>
              <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                {/* {item.boardingPass} */}
              </Text>
              <Text fontWeight="500" fontSize="1rem">
                Sorry for the denial. When did you arrive at the airport?
              </Text>
              <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                {item.arrivalTime}
              </Text>
            </VStack>
          </Box>
        </Flex>
      ) : item.complaintsCategory == 'BAGGAGE CLAIM' ? (
        <Flex
          align="flex-start"
          color="brand.200"
          flexDirection={['column', 'row']}
        >
          <Box w={['full', '60%']} as="div">
            <HStack
              align="flex-start"
              spacing="3rem"
              flexDirection={['column', 'row']}
            >
              <VStack as="div" align="flex-start" spacing={[1, 4]}>
                <Text fontWeight="500" fontSize="1rem">
                  Departing from?
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {item.departureLocation}
                </Text>
                <Text fontWeight="500" fontSize="1rem">
                  Final destination
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {item.finalDestination}
                </Text>
              </VStack>
              <VStack
                as="div"
                align="flex-start"
                spacing={[1, 4]}
                my={['1rem !important', '0 !important']}
                marginInlineStart={['0 !important', '3rem !important']}
              >
                <Text fontWeight="500" fontSize="1rem">
                  Airline
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {item.airline}
                </Text>
                <Text fontWeight="500" fontSize="1rem">
                  Departure date
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {moment(item.departureDate).format('MMM Do YYYY')}
                </Text>
              </VStack>
            </HStack>
          </Box>
          <Box w={['full', '40%']} as="div">
            <VStack as="div" align="flex-start" spacing={[1, 4]}>
              <Text fontWeight="500" fontSize="1rem">
                Flight Number
              </Text>
              <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                {item.flightNumber}
              </Text>
              <Text fontWeight="500" fontSize="1rem">
                Any additional information that would help us process your claim
                faster
              </Text>
              <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                {item.additionalInformation
                  ? item.additionalInformation
                  : 'none'}
              </Text>
            </VStack>
          </Box>
        </Flex>
      ) : item.complaintsCategory == 'REFUND' ? (
        <Flex
          align="flex-start"
          color="brand.200"
          flexDirection={['column', 'row']}
        >
          <Box w={['full', '60%']} as="div">
            <HStack
              align="flex-start"
              spacing="3rem"
              flexDirection={['column', 'row']}
            >
              <VStack as="div" align="flex-start" spacing={[1, 4]}>
                <Text fontWeight="500" fontSize="1rem">
                  Departing from?
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {item.departureLocation}
                </Text>
                <Text fontWeight="500" fontSize="1rem">
                  Final destination
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {item.finalDestination}
                </Text>
              </VStack>
              <VStack
                as="div"
                align="flex-start"
                spacing={[1, 4]}
                my={['1rem !important', '0 !important']}
                marginInlineStart={['0 !important', '3rem !important']}
              >
                <Text fontWeight="500" fontSize="1rem">
                  Do you have any connecting flights?
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {item.connectingFlights == true ? 'Yes' : 'No'}
                </Text>
                <Text fontWeight="500" fontSize="1rem">
                  Departure date
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {moment(item.departureDate).format('MMM Do YYYY')}
                </Text>
              </VStack>
            </HStack>
          </Box>
          <Box w={['full', '40%']} as="div">
            <VStack as="div" align="flex-start" spacing={[1, 4]}>
              <Text fontWeight="500" fontSize="1rem">
                Any additional information that would help us process your claim
                faster
              </Text>
              <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                {item.additionalInformation
                  ? item.additionalInformation
                  : 'none'}
              </Text>
            </VStack>
          </Box>
        </Flex>
      ) : null}
    </Box>
  );
}

export default ComplaintsDetails;
