import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import ErrorDescription from "../../../ErrorDescription";
import { Controller, useFormContext } from "react-hook-form";
import DatePicker, {
  CustomDatePickerProps,
} from "../../../Input/CustomDatePicker";

interface CustomDatePickerFormProps extends CustomDatePickerProps {
  name: string;
}

const CustomDatePicker: React.FC<CustomDatePickerFormProps> = ({
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
          <DatePicker {...restProps} {...field} value={field.value || null} />
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

export default CustomDatePicker;
