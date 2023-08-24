import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import ErrorDescription from "../../../ErrorDescription";
import Autocomplete, {
  CustomAutocompleteProps,
} from "../../../Input/Autocomplete";

interface CustomAutocompleteFormProps extends CustomAutocompleteProps {
  name: string;
}

const CustomAutocomplete: React.FC<CustomAutocompleteFormProps> = ({
  name,
  options,
  ...restProps
}) => {
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
            value={field.value || null}
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

export default CustomAutocomplete;
