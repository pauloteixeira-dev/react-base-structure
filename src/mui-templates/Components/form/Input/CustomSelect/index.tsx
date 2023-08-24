import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select, { CustomSelectProps } from "../../../Input/CustomSelect";
import { ErrorMessage } from "@hookform/error-message";
import ErrorDescription from "../../../ErrorDescription";

interface CustomSelectFormProps extends CustomSelectProps {
  name: string;
}

const CustomSelect: React.FC<CustomSelectFormProps> = ({
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
          <Select
            {...restProps}
            value={field.value}
            onChange={(ev) => {
              field.onChange(ev.target.value);
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

export default CustomSelect;
