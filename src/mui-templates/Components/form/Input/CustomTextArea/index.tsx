import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import ErrorDescription from "../../../ErrorDescription";
import TextArea from "../../../Input/CustomTextArea";
import { CustomInputProps } from "../../../Input/CustomInput";

interface CustomTextAreaFormProps extends CustomInputProps {
  name: string;
}

const CustomTextArea: React.FC<CustomTextAreaFormProps> = ({
  name,
  ...textareaProps
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
          <TextArea {...textareaProps} {...field} value={field.value || null} />
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

export default CustomTextArea;
