import React from "react";
import { Switch, Box } from "@mui/material";
import CustomLabel from "../CustomLabel";

export interface CustomSwitchProps {
  value?: boolean | null;
  onChange?: (newVal: boolean) => void;
  size?: "medium";
  label?: string;
  isDisabled?: boolean;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  value = null,
  onChange,
  size = "medium",
  label,
  isDisabled,
}) => {
  // created to match the height of the other inputs from @mui
  const height = {
    medium: "56px",
  };

  return (
    <Box width="100%" height={height[size]} display="flex" alignItems="center">
      <Switch
        checked={!!value}
        onChange={(ev) => {
          onChange && onChange(ev.target.checked);
        }}
        inputProps={{ "aria-label": "controlled" }}
        disabled={isDisabled}
      />
      {label && <CustomLabel text={label} />}
    </Box>
  );
};

export default CustomSwitch;
