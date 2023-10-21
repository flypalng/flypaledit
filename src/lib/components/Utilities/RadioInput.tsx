import { Box, Radio } from '@chakra-ui/react';
import React from 'react';

function RadioInput({
  value,
  label,
}: {
  value: string | number | undefined;
  label: string;
}) {
  return (
    <Box
      height="4rem"
      w="100%"
      padding="0 2rem"
      border="1px solid #007F82"
      background="#FFFFFF"
      borderRadius="5px"
      boxShadow="0px 0px 9px rgba(0, 127, 130, 0.37)"
      borderColor="brand.100"
      display="flex"
      color={label == label ? 'brand.200' : '#999999'}
      alignItems="center"
      _focus={{ borderColor: 'brand.200' }}
    >
      <Radio value={value} className="radio"  >
        {label}
      </Radio>
    </Box>
  );
}

export default RadioInput;
