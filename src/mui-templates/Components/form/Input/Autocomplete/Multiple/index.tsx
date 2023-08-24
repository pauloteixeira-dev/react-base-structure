import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import ErrorDescription from "../../../../ErrorDescription";
import Autocomplete, {
  CustomMultipleAutocompleteProps,
} from "../../../../Input/Autocomplete/Multiple";

interface CustomMultipleAutocompleteFormProps
  extends CustomMultipleAutocompleteProps {
  name: string;
}

const CustomMultipleAutocomplete: React.FC<
  CustomMultipleAutocompleteFormProps
> = ({ name, options, ...restProps }) => {
  const methods = useFormContext();
  const { formState, control } = methods;
  const { errors } = formState;

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Autocomplete
            options={options}
            {...restProps}
            {...field}
            value={field.value || []}
            onChange={(val) => {
              field.onChange(val);
            }}
          />
        )}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <ErrorDescription>{message}</ErrorDescription>}
      />
    </>
  );
};

export default CustomMultipleAutocomplete;
