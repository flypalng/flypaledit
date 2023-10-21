import { FormControl, FormLabel, GridItem, Icon, Text } from '@chakra-ui/react';
import {
  Controller,
  UseFormRegister,
  Path,
  FieldError,
  Control,
} from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
  placeholder?: string;
  icon?: any;
}

export const PrimaryDate = <TFormValues extends Record<string, any>>({
  name,
  required = false,
  label = '',
  register,
  validate = {},
  error,
  defaultValue,
  control,
  radios,
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
          pointerEvents="none"
        />

        <Controller
          render={({ field }) => (
            <DatePicker
              placeholderText="Select date"
              dateFormat="d MMM yyyy"
              minDate={new Date(2016, 10, 1)}
              maxDate={new Date()}
              onChange={(date) => field.onChange(date)}
              selected={field.value}
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
