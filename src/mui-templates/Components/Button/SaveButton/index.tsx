import React from "react";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";

interface Props {
  onClick?: () => void;
  label?: string;
}

const SaveButton: React.FC<Props> = ({ onClick, label }) => {
  const buttonLabel = label || "Salvar";
  return (
    <Button
      type="submit"
      variant="contained"
      startIcon={<SaveIcon />}
      onClick={onClick}
      sx={{ textTransform: "none" }}
    >
      {buttonLabel}
    </Button>
  );
};

export default SaveButton;
