import { Box, GridItem, SimpleGrid, Switch, VStack } from '@chakra-ui/react';
import {
  GiAirplaneArrival,
  GiAirplaneDeparture,
  GiTicket,
} from 'react-icons/gi';
import { BiCalendarEvent } from 'react-icons/bi';
import { PrimaryInput } from 'lib/components/Utilities/PrimaryInput';
import { ComplaintsModel } from 'types/api';
import { RadioButton } from 'lib/components/Utilities/RadioButton';
import RadioInput from 'lib/components/Utilities/RadioInput';
import { PrimaryTextarea } from 'lib/components/Utilities/Textarea';
import { PrimarySelect } from 'lib/components/Utilities/PrimarySelect';
import { airports } from 'lib/components/Utilities/airport';
import { PrimaryDate } from 'lib/components/Utilities/PrimaryDate';
import { useState } from 'react';

function Denied({
  register,
  errors,
  control,
}: {
  register: any;
  errors: any;
  control: any;
}) {
  const [isInternational, setIsInternational] = useState(true);
  const airport = isInternational
    ? airports.internationalairports
    : airports.domesticairports;
    
  const toggleAirportType = () => {
    setIsInternational(!isInternational);
  };
  return (
    <Box mb="4rem" w={['full', '70%']} mx="auto">
       <GridItem colSpan={2} marginLeft={['10', "0"]}>
          <Switch
            colorScheme="teal"
            size="lg"
            isChecked={isInternational}
            onChange={toggleAirportType}
          
     >
           {isInternational ? (
  <Box
    as="span"
    fontWeight="bold" // Add your preferred styles here
    color="teal.500"  // Add your preferred text color here
  >
    International Airports
  </Box>
): (
  <Box
    as="span"
    fontWeight="bold" // Add your preferred styles here
    color="teal.500"  // Add your preferred text color here
  >
    domestic Airports
  </Box>
)}
          </Switch>
        </GridItem>
      <SimpleGrid
        columns={2}
        rowGap="3"
        columnGap="4"
        w="100%"
        mt="2rem !important"
        background={['unset', '#F4F8FB']}
        borderRadius="10px"
        p="2rem"
      >
        <GridItem colSpan={2}>
          <SimpleGrid
            columns={2}
            rowGap={['12', '3']}
            columnGap={4}
            w="full"
            background={['unset', 'unset']}
          >
            <GridItem
              colSpan={[2, 1]}
              background={['unset', 'unset']}
              borderRadius="5px"
              p="0"
            >
              <PrimarySelect<ComplaintsModel>
                label="Departing From"
                name="departureLocation"
                register={register}
                error={errors.departureLocation}
                control={control}
                icon={GiAirplaneDeparture}
                options={airport}
                placeholder="Abuja Airport"
              />
            </GridItem>
            <GridItem
              colSpan={[2, 1]}
              background={['unset', 'unset']}
              borderRadius="5px"
              p="0"
            >
              <PrimarySelect<ComplaintsModel>
                label="Final Destination"
                name="finalDestination"
                register={register}
                error={errors.finalDestination}
                control={control}
                icon={GiAirplaneArrival}
                options={airport}
                placeholder="Akure Airport"
              />
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
      <SimpleGrid
        columns={2}
        rowGap="3"
        columnGap="4"
        w="100%"
        mt={['0 !important', '2rem !important']}
        background={['unset', '#F4F8FB']}
        borderRadius="10px"
        p="2rem"
      >
        <GridItem colSpan={2}>
          <PrimaryDate<ComplaintsModel>
            label="Departure date"
            register={register}
            error={errors.departureDate}
            name="departureDate"
            icon={BiCalendarEvent}
            control={control}
          />
        </GridItem>
      </SimpleGrid>
      <SimpleGrid
        column={2}
        rowGap="3"
        columnGap="4"
        w="100%"
        mt={['0 !important', '2rem !important']}
        background={['unset', '#F4F8FB']}
        borderRadius="10px"
        p="2rem"
      >
        <GridItem colSpan={2}>
          <RadioButton<ComplaintsModel>
            label="Do you have any connecting flights?"
            name="connectingFlights"
            register={register}
            defaultValue=""
            error={errors.connectingflights}
            control={control}
            radios={
              <>
                <RadioInput label={'No, I don’t'} value={'false'} />
                <RadioInput label={'Yes, I do'} value={'true'} />
              </>
            }
          />
        </GridItem>
      </SimpleGrid>
      <SimpleGrid
        columns={2}
        rowGap="3"
        columnGap="4"
        w="100%"
        mt="2rem !important"
        background={['unset', '#F4F8FB']}
        borderRadius="10px"
        p="2rem"
      >
        <GridItem colSpan={2}>
          <SimpleGrid
            columns={2}
            rowGap={['12', '3']}
            columnGap={4}
            w="full"
            background={['unset', 'unset']}
          >
            <GridItem
              colSpan={[2]}
              background={['unset', 'unset']}
              borderRadius="5px"
              p="0"
            >
              <PrimaryInput<ComplaintsModel>
                label="Enter your boarding pass"
                register={register}
                error={errors.boardingPass}
                defaultValue={''}
                placeholder="ZHG3456789"
                name="boardingPass"
                icon={<GiTicket size="1.8rem" />}
              />
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
      <SimpleGrid
        column={2}
        rowGap="3"
        columnGap="4"
        w="100%"
        mt={['0 !important', '2rem !important']}
        background={['unset', '#F4F8FB']}
        borderRadius="10px"
        p="2rem"
      >
        <GridItem colSpan={2}>
          <RadioButton<ComplaintsModel>
            label=" Sorry for the Denial. When did you arrive at the airport?"
            name="arrivalTime"
            register={register}
            defaultValue=""
            error={errors.arrivalTime}
            control={control}
            radios={
              <VStack w="full" align="flex-start" spacing={5}>
                <RadioInput
                  label={'0 - 1 hour early'}
                  value={'0 - 1 hour early'}
                />
                <RadioInput
                  label={'1 - 4 hours early'}
                  value={'1 - 4 hours early'}
                />
                <RadioInput
                  label={'0 - 1 hours late'}
                  value={'0 - 1 hours late'}
                />
                <RadioInput
                  label={'I never arrived'}
                  value={'I never arrived'}
                />
              </VStack>
            }
          />
        </GridItem>
      </SimpleGrid>
      <SimpleGrid
        columns={2}
        rowGap="3"
        columnGap="4"
        w="100%"
        mt="2rem !important"
        background={['unset', '#F4F8FB']}
        borderRadius="10px"
        p="2rem"
      >
        <GridItem colSpan={2}>
          <SimpleGrid
            columns={2}
            rowGap={['12', '3']}
            columnGap={4}
            w="full"
            background={['unset', 'unset']}
          >
            <GridItem
              colSpan={[2]}
              background={['unset', 'unset']}
              borderRadius="5px"
              p="0"
            >
              <PrimaryTextarea<ComplaintsModel>
                label="Any additional information that would help us process your claim faster"
                register={register}
                error={errors.additionalInformation}
                defaultValue={''}
                placeholder="Additional information"
                name="additionalInformation"
              />
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default Denied;
