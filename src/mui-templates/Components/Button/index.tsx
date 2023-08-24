import React from "react";
import MuiButton from "@mui/material/Button";

interface Props {
  onClick?: () => void;
  label?: string;
  variant?: "contained" | "outlined";
  startIcon?: React.ReactNode;
  type?: "button" | "reset" | "submit" | undefined;
}

const Button: React.FC<Props> = ({
  onClick,
  label,
  startIcon,
  variant = "outlined",
  type,
}) => {
  const buttonLabel = label;
  return (
    <MuiButton
      variant={variant}
      type={type}
      startIcon={startIcon}
      onClick={onClick}
      sx={{
        textTransform: "none",
        backgroundColor: variant === "outlined" ? "white" : undefined,
      }}
    >
      {buttonLabel}
    </MuiButton>
  );
};

export default Button;
