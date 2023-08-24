import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import CustomLabel from "../CustomLabel";

export interface CustomInputProps {
  value?: string | number;
  fullWidth?: boolean;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  onChange?:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
  multiline?: boolean;
  rows?: number;
  size?: "medium" | "small";
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  fullWidth,
  isRequired,
  isDisabled,
  label,
  multiline,
  rows,
  size,
}) => {
  const [internalValue, setInternalValue] = useState<string | number>("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const newValue: string = value as string;
    setInternalValue(newValue || "");
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInternalValue(newValue);
    onChange && onChange(event);
  };

  const inputValue = internalValue;

  return (
    <TextField
      fullWidth={fullWidth || true}
      label={<CustomLabel text={label} isRequired={isRequired} />}
      value={inputValue.toString()}
      onChange={handleChange}
      disabled={isDisabled}
      multiline={multiline}
      rows={rows}
      size={size}
    />
  );
};

export default CustomInput;
