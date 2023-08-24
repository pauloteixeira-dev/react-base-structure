import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import ErrorDescription from "../../../ErrorDescription";
import { Controller, useFormContext } from "react-hook-form";
import Switch, { CustomSwitchProps } from "../../../Input/CustomSwitch";

interface CustomSwitchFormProps extends CustomSwitchProps {
  name: string;
}

const CustomSwitch: React.FC<CustomSwitchFormProps> = ({
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
          <Switch
            {...restProps}
            value={field.value}
            onChange={(newVal) => {
              field.onChange(newVal);
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

export default CustomSwitch;
