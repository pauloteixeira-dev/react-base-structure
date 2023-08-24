import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputNumber from "../../../../Input/CustomInputNumber/CustomInputNumericString";
import ErrorDescription from "../../../../ErrorDescription";
import { ErrorMessage } from "@hookform/error-message";
import { CustomInputNumericStringProps } from "../../../../Input/CustomInputNumber/CustomInputNumericString";

interface CustomInputNumericStringFormProps
  extends CustomInputNumericStringProps {
  name: string;
}

const CustomInputNumericString: React.FC<CustomInputNumericStringFormProps> = ({
  name,
  label,
  size,
  isRequired,
  isDisabled,
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
        render={({ field: { onChange, value } }) => (
          <InputNumber
            {...inputProps}
            label={label}
            isRequired={isRequired}
            isDisabled={isDisabled}
            size={size}
            onChange={(val) => onChange(val)}
            value={value || null}
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

export default CustomInputNumericString;
