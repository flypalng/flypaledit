import {
  FormControl,
  FormLabel,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  FieldError,
  UseFormRegister,
  RegisterOptions,
  Path,
} from 'react-hook-form';

interface FormInputProps<TFormValues extends Record<string, unknown>> {
  name: Path<TFormValues>;
  placeholder?: string;
  label?: string;
  register: UseFormRegister<TFormValues>;
  error: FieldError | undefined;
  type?: string;
  required?: boolean;
  disableLabel?: boolean;
  validate?: any;
  icon?: any;
  variant?: string;
  borderColor?: string;
  borderRadius?: string;
  placeholderColor?: string;
  defaultValue: string | number | undefined;
  format?: string;
  value?: string | number | undefined;
  testId?: string;
  w?: string;
  padding?: string;
}

export const PrimaryTextarea = <TFormValues extends Record<string, any>>({
  name,
  required = false,
  type = 'text',
  label = '',
  register,
  validate = {},
  error,
  disableLabel = false,
  placeholder = '',
  variant = 'outline',
  borderColor = 'gray.300',
  borderRadius = 'md',
  placeholderColor = 'gray.300',
  defaultValue,
  format,
  value,
  icon,
  testId,
  w,
  padding,
}: FormInputProps<TFormValues>) => {
  return (
    <GridItem colSpan={2}>
      <FormControl isInvalid={!!error}>
        <FormLabel color="brand.100" fontSize="1.1rem">
          {label}
        </FormLabel>
        <Textarea
          placeholder={placeholder}
          {...register(name, { required, ...validate })}
          defaultValue={defaultValue}
          isDisabled={disableLabel}
          padding={padding}
          size="sm"
          resize="none"
          focusBorderColor="brand.200"
          borderColor="brand.100"
          borderRadius="5px"
          boxShadow="0px 0px 9px rgba(0, 127, 130, 0.37)"
        />
      </FormControl>
      <Text fontSize=".7rem" color="red">
        {(error?.type === 'required' && `${label} is required`) ||
          error?.message}
      </Text>
    </GridItem>
  );
};
