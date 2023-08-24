import React from "react";
import { Box } from "@mui/material";
import RequiredSign from "./RequiredSign";

interface Props {
  text?: string;
  isRequired?: boolean;
}

const CustomLabel: React.FC<Props> = ({ text = "", isRequired }) => (
  <Box display="flex">
    <span>{text}</span>
    <RequiredSign isRequired={isRequired} />
  </Box>
);

export default CustomLabel;
