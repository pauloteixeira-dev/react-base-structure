import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import ErrorDescription from "../../../../ErrorDescription";
import { Controller, useFormContext } from "react-hook-form";
import Autocomplete, {
  CustomAsyncAutocompleteProps,
} from "../../../../Input/Autocomplete/Async";

interface CustomAsyncAutocompleteFormProps
  extends CustomAsyncAutocompleteProps {
  name: string;
}

const CustomAsyncAutocomplete: React.FC<CustomAsyncAutocompleteFormProps> = ({
  name,
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
            {...restProps}
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

export default CustomAsyncAutocomplete;
