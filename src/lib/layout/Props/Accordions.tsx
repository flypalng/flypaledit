import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import React from 'react';

type Info = {
  title: string;
  content: string;
};
function Accordions({ title, content }: Info) {
  return (
    <AccordionItem display="flex" border="0">
      <h2>
        <AccordionButton
          _expanded={{ bg: '#DFF8F9', color: 'brand.200' }}
          width="281px"
          height="56px"
          borderRight="5px solid #007F82"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          overflow="hidden"
          padding="0 1rem"
        >
          <Box flex="1" textAlign="left" fontWeight="500">
            {title}
          </Box>
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} pt="0" pl="3.7rem">
        <Text fontWeight="700" fontSize="24px" color="brand.200" mb="1rem">
          {title}
        </Text>
        <Text color="brand.200">{content}</Text>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default Accordions;
