import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CustomLabel from "../CustomLabel";

interface Option {
  label: string;
  value: string | number;
}

export interface CustomAutocompleteProps {
  options: Option[];
  value?: Option | null;
  onChange?: (option: Option | null) => void;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  size?: "medium" | "small";
}

function CustomAutocomplete({
  options = [],
  value,
  onChange,
  label,
  isRequired,
  isDisabled,
  size,
}: CustomAutocompleteProps) {
  return (
    <Autocomplete
      id="custom-autocomplete"
      value={value}
      options={options}
      size={size}
      getOptionLabel={(option) => option?.label?.toString()}
      isOptionEqualToValue={(option, val) => option.value === val.value}
      disabled={isDisabled}
      renderInput={(params) => (
        <TextField
          {...params}
          label={<CustomLabel text={label} isRequired={isRequired} />}
          variant="outlined"
          fullWidth
        />
      )}
      onChange={(event, value) => onChange && onChange(value || null)}
      renderOption={(props, option) => (
        <li {...props} key={option.value}>
          {option.label}
        </li>
      )}
    />
  );
}

export default CustomAutocomplete;
