import React from "react";
import { Box } from "@mui/material";
import { corGeral } from "../../Styles/cores";

interface Props {
  children?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;
}

const ErrorDescription: React.FC<Props> = ({ children }) => (
  <Box color={corGeral.alerta} fontSize="12px">
    {children}
  </Box>
);

export default ErrorDescription;
