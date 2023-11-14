import { Accordion, Box, Button, Container, Flex, Text } from '@chakra-ui/react';
//@ts-ignore
import { Tabs, TabNav, TabNavItem, TabContent, TabPanel } from 'react-smarttab';
import 'react-smarttab/dist/index.css';



function Terms() {
    const openPdf = () => {
        // Replace 'your-pdf-url.pdf' with the actual URL of your PDF file
        const pdfUrl = "/assets/terms.pdf";
        
        // Open the PDF in a new window or tab
        window.open(pdfUrl, '_blank');
      };
    return (

      
  <Box
   w="full" 
    // mb="5rem"
     mt="3rem"
      h="100vh" 
      display="flex"
      
      alignItems="center"
       justifyContent="center"

       bg="linear-gradient(0.22deg, #1B345B 7.56%, rgba(27, 52, 91, 0) 158.89%), url(/assets/contact.png)"
       
         sx={{
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              
            }}>
    <Button onClick={openPdf} width="330px">click to view our Terms and Conditio</Button>
    </Box>
  );
};
  
  
  
  export default Terms;