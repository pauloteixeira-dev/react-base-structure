import React, { useState } from "react";
import { TextField, MenuItem } from "@mui/material";
import CustomLabel from "../CustomLabel";

export interface IInputProps {
  value?: string | number;
  fullWidth?: boolean;
  label?: string;
  isRequired?: boolean;
  onChange?:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
  size?: "medium" | "small";
}

export interface ISelectOption {
  label: string;
  value: number | string;
}

export interface CustomSelectProps {
  value?: string | number;
  fullWidth?: boolean;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  onChange?:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
  size?: "medium" | "small";
  options: ISelectOption[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options = [],
  value,
  onChange,
  label,
  isRequired,
  isDisabled,
  fullWidth,
  ...restProps
}) => {
  const [internalValue, setInternalValue] = useState<string | number>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    if (value === undefined) {
      // Componente não controlado
      setInternalValue(selectedValue);
    }
    onChange && onChange(event);
  };

  const selectValue = value !== undefined ? value : internalValue;

  return (
    <TextField
      select
      {...restProps}
      label={<CustomLabel text={label} isRequired={isRequired} />}
      value={selectValue}
      onChange={handleChange}
      disabled={isDisabled}
      SelectProps={{
        native: false,
      }}
      fullWidth={fullWidth || true}
    >
      {options?.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          selected={option.value === value}
        >
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CustomSelect;
