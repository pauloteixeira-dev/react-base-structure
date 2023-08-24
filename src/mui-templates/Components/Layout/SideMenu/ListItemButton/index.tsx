import React from "react";
import {
  ListItemButton as MuiListItemButton,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

interface IListItemButtonProps {
  label?: string;
  onClick?: () => void;
  enableRightArrow?: boolean;
  rightArrowRotate?: string;
}

const ListItemButton: React.FC<IListItemButtonProps> = ({
  label,
  onClick,
  enableRightArrow,
  rightArrowRotate,
}) => {
  return (
    <MuiListItemButton
      onClick={onClick}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: "8px",
      }}
    >
      <ListItemText primary={label} />
      {enableRightArrow && <ArrowRightIcon sx={{ rotate: rightArrowRotate }} />}
    </MuiListItemButton>
  );
};

export default ListItemButton;
