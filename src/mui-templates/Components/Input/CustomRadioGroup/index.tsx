import React from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

interface IRadioOption {
  value: string | number;
  label: string;
}

export interface ICustomRadioGroupProps {
  options?: IRadioOption[];
  value?: string | number | null;
  onChange?: (newValue: string) => void;
  isDisabled?: boolean;
}

const CustomRadioGroup: React.FC<ICustomRadioGroupProps> = ({
  options,
  value,
  onChange,
  isDisabled,
}) => {
  return (
    <RadioGroup
      row
      value={value}
      onChange={(ev) => {
        onChange && onChange(ev.target.value);
      }}
    >
      {options?.map((option) => (
        <FormControlLabel
          value={option.value}
          control={<Radio />}
          label={option.label}
          disabled={isDisabled}
        />
      ))}
    </RadioGroup>
  );
};

export default CustomRadioGroup;
