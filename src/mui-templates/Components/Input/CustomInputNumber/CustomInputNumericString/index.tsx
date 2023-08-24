import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import CustomLabel from "../../CustomLabel";

export interface CustomInputNumericStringProps {
  value?: string;
  fullWidth?: boolean;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  onChange?: (newValue: string) => void;
  size?: "medium" | "small";
}

const CustomInputNumericString: React.FC<CustomInputNumericStringProps> = ({
  value,
  onChange,
  fullWidth,
  isRequired,
  isDisabled,
  label,
  size,
}) => {
  const [internalValue, setInternalValue] = useState<string>("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const newValue: string = value || "";
    setInternalValue(newValue || "");
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/\D/g, "");
    setInternalValue(newValue);
    onChange && onChange(newValue);
  };

  const inputValue = internalValue;

  return (
    <TextField
      fullWidth={fullWidth || true}
      label={<CustomLabel text={label} isRequired={isRequired} />}
      value={inputValue}
      onChange={handleChange}
      disabled={isDisabled}
      size={size}
    />
  );
};

export default CustomInputNumericString;
