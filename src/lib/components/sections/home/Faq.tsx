import {
  Box,
  VStack,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
} from '@chakra-ui/react';
import { MdAdd, MdRemove } from 'react-icons/md';
import Link from 'next/link';
const DownloadPage = () => {
  return (
    <Box>
      {/* <Text>Download PDF</Text> */}
      <a href="/assets/mandate.pdf" download>
        <Text
        style={{
          textDecoration: 'none', // Remove underline
          color: 'blue', // Text color
          backgroundColor: 'lightblue', // Background color
          padding: '8px 16px', // Padding
          borderRadius: '4px', // Border radius
          border: 'none', // Remove border
          cursor: 'pointer', // Change cursor on hover
        }}>
        click to Download PDF</Text>
      </a>
    </Box>
  );
};
const DropAccordion = ({ title, message }: { title: string, message: string | JSX.Element }) => (
  // Your component code
  <AccordionItem
    fontSize="1rem"
    borderLeftWidth="1px"
    borderRightWidth="1px"
    borderBottomWidth="1px"
    borderRadius="5px"
    borderColor="brand.100"
    p={4}
    mb={5}
  >
    {({ isExpanded }) => (
      <>
        <h2 style={{ height: '3.7rem' }}>
          <AccordionButton
            h="full"
            fontSize={['.8rem', '1rem']}
            _focus={{
              boxShadow: '0 0 0 0',
              bgColor: 'transparent',
            }}
            _hover={{
              bgColor: 'transparent',
            }}
          >
            {isExpanded ? (
              <MdRemove fontSize="1.5rem" />
            ) : (
              <MdAdd fontSize="1.5rem" />
            )}
            <Box
              textAlign="left"
              flex="1"
              fontWeight="bold"
              color={isExpanded ? 'brand.100' : 'brand.600'}
              pl=".8rem"
            >
           {title}
            </Box>
            {/* <AccordionIcon color="brand.100" /> */}
          </AccordionButton>
        </h2>
        <AccordionPanel
          p="0rem 1.5rem 1rem 3.3rem"
          fontSize={['.8rem', '1rem']}
        >

        {message}
        </AccordionPanel>
      </>

    )}
  </AccordionItem>
);
const Faq = () => (
  <Box
    width={['100%', '60%']}
    px={[5, 20]}
    my={['3rem', '6rem']}
    pb={5}
    pos="relative"
    overflow="hidden"
    mx="auto"
  >
    <VStack mb={['2rem', '4rem']}>
      <Heading fontSize="2.5rem" color="brand.200" fontWeight="700" mb={4}>
        FAQs
      </Heading>
      {/* <Heading
        fontSize={['1rem', '1.1rem']}
        color="brand.100"
        fontWeight="800"
        mb={4}
        textAlign="center"
      >
        Quam lacus suspendisse faucibus interdum posuere
      </Heading> */}
      {/* <Text
        fontSize={['.8rem', '1rem']}
        color="brand.200"
        textAlign="center"
        w="90%"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text> */}
    </VStack>
    <VStack w="full">
      <Accordion allowToggle w="full">
        <DropAccordion
        title={"What does FlyPal do?"} message="FlyPal is committed to help airline passengers with problems with their flight. Based on the NCAA Consumer Protection Part 19 regulation and our unique database, we help passengers to get their compensation for a flight delay, flight cancellation, missed connection or when they were denied to board."/>
         <DropAccordion
        title="	Why choose FlyPal?" message="We have built a broad expertise in the field of passenger rights. As a result, we have established a good reputation and working relationships with airlines. With our unique extensive in-house database of historical flight, weather and other relevant data, we are in a good position to resolve your flight claim more efficiently and effectively than anyone else."/>
         <DropAccordion
        title="How will I be updated on the status of my claim?" message="You will receive a notification by email when we make changes to your file. For all developments and updates, you can login and view status on your dashboard. This gives you the most up-to-date information with what is happening with your claim."/>
         <DropAccordion
        title="How long does the claim process take?" message="According to the NCAA consumer right protection part 19 regulation, after accepting the claim, an online file will be created for you and the claim will be filed with the airline. We are obliged to allow the airline sufficient time and opportunity to respond to the claim. Should they not respond, or refuse to pay compensation, we will escalate to the NCAA for further action. You will always be kept up to date on the progress of your claim."/>
         <DropAccordion
        title="Which travel documents are required when submitting a claim?
         we require a copy of the following:" 
        message={<div>
          <ul>
            <li>Booking conformation</li>
            <li>E-Ticket(s)</li>
            <li>Boarding Pass(es)</li>
            <li>Completed FLYPAL Mandate Form <DownloadPage/></li>
          </ul>
                      You can upload these documents directly when submitting your claim. It is also possible to add them to your online file later.</div>}
        />
       
      </Accordion>
    </VStack>
  </Box>
);
export default Faq;
