import React from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface IActionButtonProps {
  title?: string;
  action: "delete" | "edit" | "view";
  onClick?: () => void;
  color?: string;
}

const ActionButton: React.FC<IActionButtonProps> = ({
  action,
  onClick,
  title,
  color,
}) => {
  const btnIcons = {
    delete: <DeleteIcon />,
    edit: <EditIcon />,
    view: <VisibilityIcon />,
  };
  const selectedIcon = btnIcons[action];

  return (
    <Button
      size="small"
      onClick={onClick}
      title={title || action}
      sx={{ minWidth: "36px", padding: "4px", color: color }}
    >
      {selectedIcon}
    </Button>
  );
};

export default ActionButton;
