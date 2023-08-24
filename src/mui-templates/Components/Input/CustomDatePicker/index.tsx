import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CustomLabel from "../CustomLabel";

export interface CustomDatePickerProps {
  label?: string;
  value?: Date | null;
  onChange?: (val: Date | null) => void;
  isRequired?: boolean;
  isDisabled?: boolean;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  value,
  onChange,
  isRequired,
  isDisabled,
}) => {
  return (
    <DemoContainer components={["DatePicker"]} sx={{ marginTop: "-8px" }}>
      <DatePicker
        label={<CustomLabel text={label} isRequired={isRequired} />}
        value={value || null}
        disabled={isDisabled}
        onChange={(val: Date | null) => {
          const newVal = val || null;
          onChange && onChange(newVal);
        }}
        format="dd/MM/yyyy"
        sx={{ width: "100%" }}
      />
    </DemoContainer>
  );
};

export default CustomDatePicker;
