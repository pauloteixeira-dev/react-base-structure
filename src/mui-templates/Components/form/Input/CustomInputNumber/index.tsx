import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputNumber from "../../../Input/CustomInputNumber";
import { NumericFormatProps } from "react-number-format";
import ErrorDescription from "../../../ErrorDescription";
import { ErrorMessage } from "@hookform/error-message";
import { CustomInputProps } from "../../../Input/CustomInput";

interface CustomInputNumberFormProps {
  name: string;
  label?: string;
  size?: "medium" | "small";
  isRequired?: boolean;
  isDisabled?: boolean;
  inputProps?: NumericFormatProps<CustomInputProps>;
}

// limitações do componente:
// Number.MAX_SAFE_INTEGER : 9007199254740991
// Number.MIN_SAFE_INTEGER : -9007199254740991
const CustomInputNumber: React.FC<CustomInputNumberFormProps> = ({
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
        render={({ field: { onChange, value, onBlur } }) => (
          <InputNumber
            {...inputProps}
            label={label}
            isRequired={isRequired}
            isDisabled={isDisabled}
            size={size}
            onValueChange={(v) => {
              onChange(v.floatValue);
            }}
            onBlur={onBlur}
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

export default CustomInputNumber;
