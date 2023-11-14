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
            Air Passenger Rights: What You Need to Know 
            </TabNavItem>
            <TabNavItem>
            The Legal Framework 
            </TabNavItem>
            <TabNavItem>
            Overbooking and Denied Boarding 
            </TabNavItem>
            <TabNavItem>
            Baggage Mishandling 
            </TabNavItem>
            <TabNavItem>
            Persons with Reduced Mobility or Special Needs  
            </TabNavItem>
            <TabNavItem>
            Family Assistance in Case of Aircraft Accidents 
            </TabNavItem>
            <TabNavItem>
            How to Protect Your Rights 
            </TabNavItem>
            <TabNavItem>
            HOW FLYPAL CAN HELP 
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
                 Air Passenger Rights: What You Need to Know 
                </Text>
                <Text
                  fontSize="1rem"
                  fontWeight="400"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                  textAlign="justify"
                >
                  If you are planning to travel by air in Nigeria, you should be aware of your rights and responsibilities as a passenger, as well as the obligations of the airlines that carry you. The Nigerian Civil Aviation Authority (NCAA) has issued regulations to protect the interests and welfare of air passengers, and to ensure fair and transparent practices in the aviation industry. These regulations are contained in the Nigeria Civil Aviation Regulations Part 19 Consumer Protection, which came into effect on May 17, 2023
 
 The regulations cover various situations that may affect your travel experience, such as overbooking, denied boarding, flight delay, flight cancellation, baggage mishandling, and aircraft accidents. They also protect the rights of persons with reduced mobility or special needs and provide family assistance in case of aircraft accidents. The regulations specify the compensation, reimbursement, re-routing, care, and information that you are entitled to in case of flight disruptions or mishandling of baggage. They also require airlines to provide full disclosure of all the terms and conditions of carriage, to inform you of your rights, and to avoid misleading advertising. 
 
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
                 The Legal Framework 
                </Text>
                <Text
                  fontSize="1rem"
                  fontWeight="400"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                  textAlign="justify"
                >
                 The Nigerian aviation industry is regulated by both national and international laws and conventions. The main national legislation is the Civil Aviation Act (CAA), which establishes the Nigerian Civil Aviation Authority (NCAA) as the regulatory body responsible for overseeing the industry and ensuring compliance with safety standards, consumer protection, and other relevant rules. 
 
 The CAA also incorporates the provisions of the Montreal Convention 1999, which is an international treaty that sets out the rules for liability of airlines in cases of death or injury of passengers, as well as delay, damage, or loss of baggage or cargo. The Montreal Convention applies to international carriage by air to and from Nigeria, as well as domestic carriage by air within Nigeria. 
  
 In addition to the CAA and the Montreal Convention, there are other national regulations that deal with specific aspects of air passenger rights, such as the Nigerian Civil Aviation Regulations 2023 (NCARs), which contain detailed rules on compensation for overbooking, denied boarding, flight delays or cancellations, and baggage mishandling; and the Consumer Protection Regulations 2017 (CPRs), which outline the minimum standards of service and care that airlines must provide to their customers. 
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
                 Overbooking and Denied Boarding 
                </Text>
                <Text
                  fontSize="1rem"
                  fontWeight="400"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                  textAlign="justify"
                >
                 Overbooking is a practice where airlines sell more seats than the actual capacity of the aircraft, in anticipation of some passengers not showing up for their flights. This may result in some passengers being denied boarding involuntarily, even if they have a confirmed reservation and have checked in on time. 
 
 If you are denied boarding involuntarily due to overbooking, you have the right to:  <br></br>
  
 Receive compensation from the airline of at least 25% of the fares or passenger ticket price for local flights within Nigeria. 30% of the passenger ticket price for all international flights. 
 Choose between reimbursement of the full cost of your ticket or re-routing to your destination at the earliest opportunity or at a later date at your convenience. 
 Receive care from the airline, such as meals, refreshments, hotel accommodation, transport between the airport and the hotel, and two telephone calls or emails. 
 Receive information from the airline about the reasons for denied boarding, the compensation and assistance available, and the complaint procedures. 
 You can also voluntarily give up your seat in exchange for benefits agreed with the airline, such as vouchers, upgrades, or free tickets. However, you should make sure that you understand the terms and conditions of the offer before accepting it. 
  
 Flight Delay and Cancellation 
 Flight delay is when your flight departs later than its scheduled time. Flight cancellation is when your flight is cancelled by the airline before its scheduled departure. 
  
 If your flight is delayed or cancelled, you have the right to:  <br></br>
  
 Receive information from the airline about the status of your flight, the reasons for the delay or cancellation, and the estimated departure time. 
 Receive care from the airline if the delay or cancellation is expected to last more than two hours for domestic flights or four hours for international flights. The care includes meals, refreshments, hotel accommodation, transport between the airport and the hotel, and two telephone calls or emails. 
 Choose between reimbursement of the full cost of your ticket or re-routing to your destination at the earliest opportunity or at a later date at your convenience if the delay or cancellation is expected to last more than five hours for domestic flights or nine hours for international flights. 
 Receive compensation from the airline if the delay or cancellation is caused by factors within its control and not by extraordinary circumstances such as weather conditions, security issues, or air traffic management. The compensation is at least 25% of the fares or passenger ticket price for local flights within Nigeria and 30% of the passenger ticket price for all international flights depending on the length of your flight and the delay incurred. 
 
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
                  Baggage Mishandling 
                </Text>
                <Text
                  fontSize="1rem"
                  fontWeight="400"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                  textAlign="justify"
                >
                 Baggage mishandling is when your checked baggage is lost, damaged, delayed, or pilfered by the airline or its agents. 
 
 If your baggage is mishandled, you have the right to:  <br></br>
  
 Receive compensation from the airline for any damage or loss caused to your baggage up to a maximum of N350 per kilogram for domestic flights or 1,131 Special Drawing Rights (SDR) per passenger for international flights. SDR is an international reserve asset created by the International Monetary Fund (IMF) that can be converted into any currency based on its exchange rate. 
 A refund of the checked baggage fees if the baggage is not delivered to you within 24 hours from the arrival of flight. 
 File a written complaint with the airline within seven days for damaged baggage or 21 days for delayed baggage from the date of receipt of your baggage. 
 Compensation for inconvenience, in case your checked-in baggage was off-loaded for operational, safety, or security reasons. The air carrier must carry the off-loaded baggage in the next flight with available space and deliver the same to you.  
 Receive information from the airline about the status of your baggage claim and its settlement within 30 days. 
 
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
                 Persons with Reduced Mobility or Special Needs 
                </Text>
                <Text
                  fontSize="1rem"
                  fontWeight="400"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                  textAlign="justify"
                >
                 Persons with reduced mobility (PRM) are those who have difficulty moving around due to physical disability, age, illness, or injury. Persons with special needs are those who require special assistance or accommodation due to medical conditions, pregnancy, or other factors. 
 
 If you are a PRM or a person with special needs, you have the right to:  <br></br>
  
 Receive assistance from the airline and the airport operator at no extra charge, such as wheelchair service, priority boarding, seating accommodation, and escort service. 
 Travel with your own mobility equipment or assistive devices, such as crutches, walkers, canes, or hearing aids, subject to safety and security requirements. 
 Travel with a companion or a service animal, such as a guide dog, subject to health and quarantine regulations. 
 Receive information from the airline and the airport operator about the facilities and services available for PRM and persons with special needs. 
 Not be refused carriage by the airline on the basis of your disability or special need, unless it is necessary for safety or operational reasons or it is physically impossible to board or disembark you. 
 
 
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
                Family Assistance in Case of Aircraft Accidents 
                </Text>
                <Text
                  fontSize="1rem"
                  fontWeight="400"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                  textAlign="justify"
                >
                 An aircraft accident is an occurrence associated with the operation of an aircraft that results in death, serious injury, or significant damage to the aircraft or its surroundings. 
 
 If you are a family member of a passenger involved in an aircraft accident, you have the right to: 
  
 Receive timely and accurate information from the airline and the authorities about the accident and the status of your loved one. 
 Receive care and support from the airline and the authorities, such as psychological counseling, legal advice, financial assistance, and repatriation of remains. 
 Receive respect and privacy from the media and the public. 
 Participate in the investigation and litigation process as a party of interest. 
 
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
                  How to Protect Your Rights 
                </Text>
                <Text
                  fontSize="1rem"
                  fontWeight="400"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                  textAlign="justify"
                >
                As an air passenger in Nigeria, you can take some proactive steps to protect your rights and interests when travelling by air. Some of these steps include: 
 
 -	Reading and understanding the terms and conditions of your contract of carriage with the airline before booking your ticket. This will help you to know what your rights and obligations are in case of any issue that may arise during your travel. <br></br>
 -	Keeping a copy of your ticket, boarding pass, baggage tag, and any other relevant document that may serve as evidence of your travel arrangement with the airline. <br></br>
 -	Checking in on time and complying with the airline’s policies on baggage weight, size, and content. This will help you to avoid any extra charges or inconvenience at the airport. <br></br>
 -	Reporting any damage or loss of your baggage to the airline immediately upon arrival at your destination. You should also fill out a Property Irregularity Report (PIR) form and obtain a copy from the airline. This will help you to substantiate your claim for compensation if necessary. <br></br>
 -	Keeping receipts of any expenses incurred as a result of flight delay or cancellation, such as refreshment, meal, hotel accommodation, transportation, or communication. This will help you to claim reimbursement from the airline if entitled. <br></br>
 -	Contacting the airline’s customer service department or representative to lodge a complaint or request for compensation in case of any breach of your rights. You should do this within a reasonable time after your travel and provide all relevant details and documents to support your claim. <br></br>
 -	Escalating your complaint to the NCAA’s Consumer Protection Department (CPD) if you are not satisfied with the response or resolution offered by the airline. You can do this by filling out a complaint form online or offline and submitting it to the CPD along with copies of your ticket, boarding pass, baggage tag, PIR form, receipts, and any other relevant document. The CPD will investigate your complaint and mediate between you and the airline to reach an amicable settlement. <br></br>
 -	Seeking legal advice or action if you are still not satisfied with the outcome of your complaint or claim. You can do this by consulting a lawyer who specializes in aviation law or consumer protection law and filing a suit against the airline in a competent court of law. However, you should be aware of the time limits and procedures for filing such suits, as well as the costs and risks involved. <br></br>
  
 
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
                HOW FLYPAL CAN HELP 
                </Text>
                <Text
                  fontSize="1rem"
                  fontWeight="400"
                  color="brand.200"
                  fontFamily="'Poppins', sans-serif"
                  textAlign="justify"
                >
                 The objective of flypal is to assist flight passengers. 
We are dedicated to serving the travel industry and air passengers at large by providing essential, up-todate information about travelers' rights. 
Whether you're a first-time flyer or a seasoned traveler, we can help you understand the regulations that are on your side. So, you know what your rights are and how to deal with a wide range of flight disruptions beyond your control. 
We assist passengers who have experienced flight delays, cancellations, denied boarding, baggage mishandling, and missed connections. 
Don't let the complicated procedures of air travel ruin your enjoyment. Understand your rights, claim your compensation, and allow us to assist you in making your journey as smooth as possible. Your rights are always in good hands when you use flypal. 

 
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
