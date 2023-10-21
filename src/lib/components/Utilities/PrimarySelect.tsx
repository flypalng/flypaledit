import { FormControl, FormLabel, GridItem, Icon, Text } from '@chakra-ui/react';
import {
  Controller,
  UseFormRegister,
  Path,
  FieldError,
  Control,
} from 'react-hook-form';
import dynamic from 'next/dynamic';
//@ts-ignore
const Selectrix = dynamic(() => import('react-selectrix'), { ssr: false });

// import {} from '@chakra-ui/core';

interface FormInputProps<TFormValues extends Record<string, unknown>> {
  name: Path<TFormValues>;
  required?: boolean;
  disableLabel?: boolean;
  validate?: any;
  label?: string;
  register: UseFormRegister<TFormValues>;
  defaultValue?: string | number | undefined;
  error: FieldError | undefined;
  control: Control<TFormValues>;
  radios?: any;
  options: any;
  placeholder?: string;
  icon: any;
}

export const PrimarySelect = <TFormValues extends Record<string, any>>({
  name,
  required = false,
  label = '',
  register,
  validate = {},
  error,
  defaultValue,
  control,
  radios,
  options,
  icon,
  placeholder,
}: FormInputProps<TFormValues>) => {
  return (
    <GridItem>
      <FormControl>
        <FormLabel color="brand.100" fontSize="1.1rem" mb=".5rem">
          {label}
        </FormLabel>
        <Icon
          w="1.8rem"
          h="1.8rem"
          color="brand.100"
          as={icon}
          pos="absolute"
          top="50%"
          left="15px"
          zIndex="5"
        />
        <Controller
          render={({ field }) => (
            <Selectrix
              //@ts-ignore
              arrow={false}
              materialize={true}
              placeholder={placeholder}
              height={150}
              options={options}
              onChange={(value: { key: number; label: string }) =>
                field.onChange(value.label)
              }
            />
          )}
          name={name}
          control={control}
        />
      </FormControl>
      <Text fontSize=".7rem" color="red">
        {(error?.type === 'required' && `${label} is required`) ||
          error?.message}
      </Text>
    </GridItem>
  );
};
