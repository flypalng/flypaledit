import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import Cards from 'lib/layout/Props/Cards';
import { MdFlight, MdCardTravel, MdWifiProtectedSetup, MdCancel } from 'react-icons/md';
import { GiCancel, GiWorld } from 'react-icons/gi';

function Help() {
  return (
    <Box
      w="full"
      bgColor="brand.800"
      bgImage="url(/assets/lines2.png)"
      h="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      py="5rem"
    >
      <Container maxW="90%">
        <Box w="full">
          <VStack w={['100%', '60%']} mx="auto">
            <Text fontSize=".8rem" textAlign="center" color="brand.100">
              WHY CHOOSE FLYPAL?
            </Text>
            <Heading
              fontSize={['1.5rem', '2.5rem']}
              color="brand.200"
              fontWeight="700"
              mb={4}
            >
              How can we help?
            </Heading>
            <Text
              fontSize={['.7rem', '1rem']}
              color="brand.200"
              textAlign="center"
              w="90%"
            >
              As a pioneer of flight compensation in Nigeria, we are well positioned to support you with your claim requests for both domestic and international flights. 
            </Text>
          </VStack>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(5, 1fr)']}
            gap="3rem"
            mt="3rem"
          >
            <Cards
              icon={GiCancel}
              title="cancelled flights? We’re here to help. "
              categoryId={1}
              link="cancelled-flights"
              note="Flight cancelled with little notice? You could be entitled to up to ₦50,520 compensation on top of your refund."
            />
            <Cards
              icon={MdFlight}
              title="Flight Delayed? We’re here to help. "
              categoryId={2}
              link="flight-delayed"
              note="Flight cancelled with little notice? You could be entitled to up to ₦50,520 compensation on top of your refund."
            />
            <Cards
              icon={GiWorld}
              title="denied boarding? We’re here to help. "
              categoryId={3}
              link="denied-boarding? We’re here to help. "
              note="Flight cancelled with little notice? You could be entitled to up to ₦50,520 compensation on top of your refund."
            />
            <Cards
              icon={MdCardTravel}
              title="baggage problem?
               We’re here to help. "
              categoryId={4}
              link="baggage-claim"
              note="Flight cancelled with little notice? You could be entitled to up to ₦50,520 compensation on top of your refund."
            />
            <Cards
              icon={MdWifiProtectedSetup}
              title="want refund? We’re here to help. "
              categoryId={5}
              link="refund-claim"
              note="Flight cancelled with little notice? You could be entitled to up to ₦50,520 compensation on top of your refund."
            />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Help;
