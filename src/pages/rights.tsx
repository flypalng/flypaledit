import { Accordion, Box, Container, Flex, Text } from '@chakra-ui/react';
//@ts-ignore
import { Tabs, TabNav, TabNavItem, TabContent, TabPanel } from 'react-smarttab';
import 'react-smarttab/dist/index.css';

function rights() {
  return (
    <Box w="full" bgColor="white" mb="5rem" mt="3rem">
      <Container maxW="90%">
        <Tabs
          tabName="tab1"
          selected={0}
          theme="sourceforge"
          orientation={'vertical'}
          justified={true}
          enableURLhash={false}
        >
          <TabNav>
            <TabNavItem>
           What do I need to know if I am planning to travel by air in Nigeria?
            </TabNavItem>
            <TabNavItem>
           What do I do if my flight is Overbooked and I am denied Boarding?
            </TabNavItem>
            <TabNavItem>
            What do I do if my flight is being delayed or cancelled?
            </TabNavItem>
            <TabNavItem>
            What do I do if my Baggage is being mishandled?
            </TabNavItem>
          </TabNav>

          <TabContent>
            <TabPanel>
              <Box className="tabs">
                <Text
                  fontSize={['1rem', '24px']}
                  textAlign={['center', 'left']}
                  fontWeight="700"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                  mb="1.5rem"
                >
                 	What do I need to know if I am planning to travel by air in Nigeria?
                </Text>
                <Text
                  fontSize="1rem"
                  fontWeight="400"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                  textAlign="justify"
                >
                  If you are planning to travel by air in Nigeria, you should be aware of your rights and responsibilities as a passenger, as well as the obligations of the airlines that carry you. <br></br><br></br>The Nigerian Civil Aviation Authority (NCAA) has issued regulations to protect the interests and welfare of air passengers, and to ensure fair and transparent practices in the aviation industry. These regulations are contained in the Nigeria Civil Aviation Regulations Part 19 Consumer Protection, which came into effect on May 17, 2023.<br></br><br></br> The regulations cover various situations that may affect your travel experience, such as overbooking, denied boarding, flight delay, flight cancellation, baggage mishandling, and aircraft accidents. They also protect the rights of persons with reduced mobility or special needs and provide family assistance in case of aircraft accidents. <br></br><br></br>The regulations specify the compensation, reimbursement, re-routing, care, and information that you are entitled to in case of flight disruptions or mishandling of baggage. They also require airlines to provide full disclosure of all the terms and conditions of carriage, to inform you of your rights, and to avoid misleading advertising.
                </Text>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box className="tabs">
                <Text
                  fontSize={['1rem', '24px']}
                  textAlign={['center', 'left']}
                  fontWeight="700"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                  mb="1.5rem"
                >
                 	What do I do if my flight is Overbooked and I am denied Boarding?
                </Text>
                <Text
                  fontSize="1rem"
                  fontWeight="400"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                  textAlign="justify"
                >
                 Flight overbooking and denied boarding is a practice where airlines sell more seats than the actual capacity of the aircraft, in anticipation of some passengers not showing up for their flights. This may result in some passengers being denied boarding involuntarily, even if they have a confirmed reservation and have checked in on time. <br></br><br></br>
                 <Text
                  fontSize={['1rem', '24px']}
                  textAlign={['center', 'left']}
                  fontWeight="700"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                >If you are denied boarding involuntarily due to overbooking, you have the right to: </Text><br></br>
                  Receive compensation from the airline of at least 25% of the fares or passenger ticket price for local flights within Nigeria.<br></br><br></br> 30% of the passenger ticket price for all international flights. Choose between reimbursement of the full cost of your ticket or re-routing to your destination at the earliest opportunity or at a later date at your convenience. Receive care from the airline, such as meals, refreshments, hotel accommodation, transport between the airport and the hotel, and two telephone calls or emails.<br></br><br></br> Receive information from the airline about the reasons for denied boarding, the compensation and assistance available, and the complaint procedures. <br></br><br></br>You can also voluntarily give up your seat in exchange for benefits agreed with the airline, such as vouchers, upgrades, or free tickets. However, you should make sure that you understand the terms and conditions of the offer before accepting it.
                </Text>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box className="tabs">
                <Text
                  fontSize={['1rem', '24px']}
                  textAlign={['center', 'left']}
                  fontWeight="700"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                  mb="1.5rem"
                >
                 What do I do if my flight is being delayed or cancelled?
                </Text>
                <Text
                  fontSize="1rem"
                  fontWeight="400"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                  textAlign="justify"
                >
                  <Text
                  fontSize={['1rem', '24px']}
                  textAlign={['center', 'left']}
                  fontWeight="700"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                 
                >
                Flight delay
                </Text>
 is when your flight departs later than its scheduled time. <br></br><br></br>
 <Text
                  fontSize={['1rem', '24px']}
                  textAlign={['center', 'left']}
                  fontWeight="700"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                >Flight cancellation</Text>
 is when your flight is cancelled by the airline before its scheduled departure.<br></br><br></br>
 <Text
                  fontSize={['1rem', '24px']}
                  textAlign={['center', 'left']}
                  fontWeight="700"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                >If your flight is delayed or cancelled, you have the right to: </Text>Receive information from the airline about the status of your flight,the reasons for the delay or cancellation, and the estimated departure time.<br></br><br></br> Receive care from the airline if the delay or cancellation is expected to last more than two hours for domestic flights or four hours for international flights. The care includes meals, refreshments, hotel accommodation, transport between the airport and the hotel, and two telephone calls or emails. <br></br><br></br>Choose between reimbursement of the full cost of your ticket or re-routing to your destination at the earliest opportunity or at a later date at your convenience if the delay or cancellation is expected to last more than five hours for domestic flights or nine hours for international flights. <br></br><br></br>Receive compensation from the airline if the delay or cancellation is caused by factors within its control and not by extraordinary circumstances such as weather conditions, security issues, or air traffic management. The compensation is at least 25% of the fares or passenger ticket price for local flights within Nigeria and 30% of the passenger ticket price for all international flights depending on the length of your flight and the delay incurred.
                </Text>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box className="tabs">
                <Text
                  fontSize={['1rem', '24px']}
                  textAlign={['center', 'left']}
                  fontWeight="700"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                  mb="1.5rem"
                >
                  What do I do if my Baggage is being mishandled?
                </Text>
                <Text
                  fontSize="1rem"
                  fontWeight="400"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                  textAlign="justify"
                >
                  Baggage mishandling is when your checked baggage is lost, damaged, delayed, or pilfered by the airline or its agents.<br></br> <br></br>
                  <Text
                  fontSize={['1rem', '24px']}
                  textAlign={['center', 'left']}
                  fontWeight="700"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                > If your baggage is mishandled, you have the right to:<br></br> </Text>
                <br></br>
                  Receive compensation from the airline for any damage or loss caused to your baggage up to a maximum of N350 per kilogram for domestic flights or 1,131 Special Drawing Rights (SDR) per passenger for international flights. SDR is an international reserve asset created by the International Monetary Fund (IMF) that can be converted into any currency based on its exchange rate. A refund of the checked baggage fees if the baggage is not delivered to you within 24 hours from the arrival of flight. File a written complaint with the airline within seven days for damaged baggage or 21 days for delayed baggage from the date of receipt of your baggage. Compensation for inconvenience, in case your checked-in baggage was off-loaded for operational, safety, or security reasons. The air carrier must carry the off-loaded baggage in the next flight with available space and deliver the same to you. Receive information from the airline about the status of your baggage claim and its settlement within 30 days.
                </Text>
              </Box>
            </TabPanel>
          </TabContent>
        </Tabs>
        {/* <Flex>
          <Box w="30%">
            <Flex
              bgColor="transparent"
              borderRight="6px solid #007F82"
              padding="1rem 3rem"
              cursor="pointer"
              className="tabs"
              _hover={{ bgColor: '#DFF8F9' }}
            >
              <Text
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                overflow="hidden"
                fontSize="18px"
                fontWeight="500"
                color="brand.200"
              >
                Compensation and terms of your air passenger Right
              </Text>
            </Flex>
          </Box>
          <Box w="65%" ml="auto">
            <Box className="tabs">
              <Text
                fontSize="24px"
                fontWeight="700"
                color="brand.200"
                fontFamily="Poppins"
                mb="1.5rem"
              >
                Compensation and terms of your air passenger Right
              </Text>
              <Text
                fontSize="1rem"
                fontWeight="400"
                color="brand.200"
                fontFamily="Poppins"
                textAlign="justify"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pellentesque eu tincidunt tortor aliquam nulla facilisi.
                Praesent elementum facilisis leo vel fringilla est ullamcorper.
                Porta lorem mollis aliquam ut. Eget egestas purus viverra
                accumsan in nisl nisi scelerisque. Habitant morbi tristique
                senectus et. <br />
                <br />
                Volutpat lacus laoreet non curabitur gravida arcu ac tortor
                dignissim. Lorem ipsum dolor sit amet consectetur adipiscing
                elit. Pellentesque elit ullamcorper dignissim cras tincidunt
                lobortis. Gravida arcu ac tortor dignissim. Vitae nunc sed velit
                dignissim sodales ut eu sem. Ultricies mi quis hendrerit dolor.
                Magna ac placerat vestibulum lectus mauris ultrices eros in.{' '}
                <br />
                <br />
                Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Massa
                sed elementum tempus egestas sed sed risus pretium quam. Sapien
                pellentesque habitant morbi tristique senectus et. In vitae
                turpis massa sed elementum tempus egestas sed sed. Tellus
                pellentesque eu tincidunt tortor aliquam nulla facilisi cras
                fermentum. Malesuada fames ac turpis egestas. <br />
                <br />
                Aliquam etiam erat velit scelerisque in. Odio eu feugiat pretium
                nibh ipsum consequat. Cras sed felis eget velit aliquet
                sagittis. Porttitor lacus luctus accumsan tortor posuere ac.
                Nibh ipsum consequat nisl vel pretium lectus quam id. Mattis
                enim ut tellus elementum sagittis vitae. Phasellus vestibulum
                lorem sed risus ultricies tristique nulla. Ligula ullamcorper
                malesuada proin libero nunc consequat interdum. Et sollicitudin
                ac orci phasellus. Diam quis enim lobortis scelerisque.
              </Text>
            </Box>
          </Box>
        </Flex> */}
      </Container>
    </Box>
  );
}

export default rights;
