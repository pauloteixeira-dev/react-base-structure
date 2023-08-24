import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import ErrorDescription from "../../../ErrorDescription";
import { Controller, useFormContext } from "react-hook-form";
import RadioGroup, {
  ICustomRadioGroupProps,
} from "../../../Input/CustomRadioGroup";
import { Box } from "@mui/material";

interface ICustomRadioGroupFormProps extends ICustomRadioGroupProps {
  name: string;
}

const CustomRadioGroup: React.FC<ICustomRadioGroupFormProps> = ({
  name,
  ...restProps
}) => {
  const methods = useFormContext();
  const { formState, control } = methods;
  const { errors } = formState;

  return (
    <Box display="flex" flexDirection="column">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup
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
    </Box>
  );
};

export default CustomRadioGroup;
