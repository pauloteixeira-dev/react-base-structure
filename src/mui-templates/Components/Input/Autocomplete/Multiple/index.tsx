import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CustomLabel from "../../CustomLabel";

interface Option {
  label: string;
  value: string | number;
}

export interface CustomMultipleAutocompleteProps {
  options: Option[];
  value?: Option[];
  onChange?: (option: Option[] | null) => void;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  size?: "medium" | "small";
}

function CustomMultipleAutocomplete({
  options = [],
  value = [],
  onChange,
  label,
  isRequired,
  isDisabled,
}: CustomMultipleAutocompleteProps) {
  return (
    <Autocomplete
      id="custom-autocomplete"
      multiple
      value={value}
      options={options}
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
      onChange={(event, value) => onChange && onChange(value || [])}
      renderOption={(props, option) => (
        <li {...props} key={option.value}>
          {option.label}
        </li>
      )}
    />
  );
}

export default CustomMultipleAutocomplete;
