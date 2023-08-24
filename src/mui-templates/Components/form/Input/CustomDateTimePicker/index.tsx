import React from "react";
import DateTimePicker, {
  CustomDateTimePickerProps,
} from "../../../Input/CustomDateTimePicker";
import { ErrorMessage } from "@hookform/error-message";
import ErrorDescription from "../../../ErrorDescription";
import { Controller, useFormContext } from "react-hook-form";

interface CustomDateTimePickerFormProps extends CustomDateTimePickerProps {
  name: string;
}

const CustomDateTimePicker: React.FC<CustomDateTimePickerFormProps> = ({
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
          <DateTimePicker
            {...restProps}
            onChange={field.onChange}
            value={field.value || null}
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

export default CustomDateTimePicker;
