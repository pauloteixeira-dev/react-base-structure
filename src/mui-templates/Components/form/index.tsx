import React from "react";
import { UseFormReturn, FormProvider } from "react-hook-form";

interface FormProps {
  formMethods: UseFormReturn<any, any>;
  onSubmit: (data: any) => void;
  onInvalid?: (errors: any) => void;
  children?: React.ReactElement | React.ReactElement[];
}

const Form: React.FC<FormProps> = ({
  formMethods,
  onSubmit,
  onInvalid,
  children,
}) => {
  const { handleSubmit } = formMethods;

  const handleInvalid = (errors: any) => {
    console.error(errors);
    onInvalid && onInvalid(errors);
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit, handleInvalid)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
