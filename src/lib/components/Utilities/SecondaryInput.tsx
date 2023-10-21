import {
  FormControl,
  FormLabel,
  GridItem,
  Input,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  FieldError,
  UseFormRegister,
  RegisterOptions,
  Path,
} from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

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
  icon?: boolean;
  variant?: string;
  borderColor?: string;
  borderRadius?: string;
  placeholderColor?: string;
  defaultValue: string | number | undefined;
  format?: string;
  value?: string | number | undefined;
  testId?: string;
}

export const SecondaryInput = <TFormValues extends Record<string, any>>({
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
  testId,
}: FormInputProps<TFormValues>) => {
  const [show, setShow] = useState<boolean>(false);
  const inputStyle = error
    ? 'shadow-sm focus:ring-red-500 focus:border-red-500 focus:border-0 block w-full h-11 sm:text-sm border border-red-500 rounded pl-4'
    : 'shadow-sm focus:ring-vca-green focus:border-vca-orange-2 focus:border-0 block w-full h-11 sm:text-sm border border-gray-400 rounded pl-4';
  return (
    <GridItem colSpan={2}>
      <FormControl isInvalid={!!error}>
        <FormLabel color="brand.100" fontSize="1.1rem">
          {label}
        </FormLabel>
        <Input
          placeholder={placeholder}
          type={type}
          {...register(name, { required, ...validate })}
          defaultValue={defaultValue}
          variant="filled"
        />
      </FormControl>
      <Text fontSize=".7rem" color="red">
        {(error?.type === 'required' && `${label} is required`) ||
          error?.message}
      </Text>
    </GridItem>
  );
};
