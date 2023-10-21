import {
  Box,
  FormControl,
  FormLabel,
  GridItem,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Widget } from '@uploadcare/react-widget';

function  Fourth({
  canSubmit,
  setCanSubmit,
  setUploadedUrl,
}: {
  canSubmit: any;
  setCanSubmit: any;
  setUploadedUrl: (url: string) => void;
}) {
  const onChange = (info: any) => {
    setCanSubmit(true);
    // console.log('Upload completed:', info);
    setUploadedUrl(info.originalUrl);
  };
  return (
    <Box w={['full', '70%']} mx="auto">
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
          <HStack justify="space-between" spacing={6}>
            <FormControl>
              <FormLabel color="brand.100" fontSize="1.1rem">
                Upload your signed and scanned mandate form
              </FormLabel>
              <Widget publicKey="fda3a71102659f95625f" onChange={onChange} />
            </FormControl>
          </HStack>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default Fourth;
