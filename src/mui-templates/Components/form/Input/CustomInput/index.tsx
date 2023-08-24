import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import ErrorDescription from "../../../ErrorDescription";
import Input, { CustomInputProps } from "../../../Input/CustomInput";

interface CustomInputFormProps extends CustomInputProps {
  name: string;
}

const CustomInput: React.FC<CustomInputFormProps> = ({
  name,
  ...inputProps
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
          <Input {...inputProps} {...field} value={field.value || null} />
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

export default CustomInput;
