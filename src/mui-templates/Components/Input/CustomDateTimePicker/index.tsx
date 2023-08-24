import { TextField } from "@mui/material";
import { format, parseISO } from "date-fns";
import React from "react";
import CustomLabel from "../CustomLabel";

export interface CustomDateTimePickerProps {
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  value?: Date | null;
  onChange?: (newDate: Date | null) => void;
  size?: "medium" | "small";
}

// Componente criado de forma a ser usado apenas como um componente controlado
const CustomDateTimePicker: React.FC<CustomDateTimePickerProps> = ({
  label,
  isRequired,
  isDisabled,
  value,
  onChange,
  size,
}) => {
  const formattedDate = value ? format(value, "yyyy-MM-dd'T'HH:mm") : "";

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const stringValue = event?.target?.value;
    const dateValue = stringValue ? parseISO(stringValue) : null;
    onChange && onChange(dateValue);
  };

  return (
    <TextField
      fullWidth
      disabled={isDisabled}
      size={size}
      label={<CustomLabel text={label} isRequired={isRequired} />}
      type="datetime-local"
      InputLabelProps={{ shrink: true }}
      onChange={handleChange}
      value={formattedDate}
    />
  );
};

export default CustomDateTimePicker;
