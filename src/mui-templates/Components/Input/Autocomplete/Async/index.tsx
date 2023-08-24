import React, { useCallback, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { debounce } from "lodash";
import { isAfter } from "date-fns";
import CustomLabel from "../../CustomLabel";

interface IOption {
  label: string;
  value: number | string;
}

interface ISuggestionData {
  readonly controlDate: Date;
  options: IOption[];
}

export interface CustomAsyncAutocompleteProps {
  value?: IOption;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  onChange?: (val: IOption | null) => void;
  searchOptions: (searchString: string) => Promise<IOption[]>;
  size?: "medium" | "small";
}

const CustomAsyncAutocomplete: React.FC<CustomAsyncAutocompleteProps> = ({
  value = null,
  label,
  isRequired,
  isDisabled,
  onChange,
  searchOptions,
  size,
}) => {
  const initialSuggestions: ISuggestionData = {
    controlDate: new Date(),
    options: [],
  };

  const [suggestions, setSuggestions] =
    useState<ISuggestionData>(initialSuggestions);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = (searchString?: string) => {
    setSuggestions((prev) => ({
      controlDate: prev.controlDate,
      options: [],
    }));

    if (!!searchString) {
      setLoading(true);
      const requestDate = new Date();
      searchOptions(searchString)
        .then((newOptions) => {
          setSuggestions((prev) => {
            if (isAfter(requestDate, prev.controlDate)) {
              return {
                controlDate: requestDate,
                options: newOptions,
              };
            }
            return prev;
          });
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleSearch = useCallback(
    debounce((value?: string) => handleSearch(value), 1000),
    []
  );

  return (
    <Autocomplete
      id="custom-autocomplete"
      value={value}
      loading={loading}
      size={size}
      disabled={isDisabled}
      options={suggestions.options}
      filterOptions={(x) => x}
      getOptionLabel={(option) => option?.label?.toString()}
      isOptionEqualToValue={(option, val) => option.value === val.value}
      renderInput={(params) => (
        <TextField
          {...params}
          label={<CustomLabel text={label} isRequired={isRequired} />}
          variant="outlined"
          fullWidth
        />
      )}
      onChange={(event, value) => onChange && onChange(value || null)}
      onInputChange={(ev) => {
        const target = ev?.target as any;
        debouncedHandleSearch(target?.value);
      }}
    />
  );
};

export default CustomAsyncAutocomplete;
