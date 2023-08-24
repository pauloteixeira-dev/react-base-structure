import { Collapse, List, Stack } from "@mui/material";
import React from "react";
import ListItemButton from "../ListItemButton";

interface ICustomCollapseProps {
  label?: string;
  onClick?: () => void;
  isOpen?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

const CustomCollapse: React.FC<ICustomCollapseProps> = ({
  onClick,
  label,
  isOpen,
  children,
}) => {
  return (
    <>
      <ListItemButton
        onClick={onClick}
        label={label}
        enableRightArrow
        rightArrowRotate={isOpen ? "90deg" : "none"}
      />
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ margin: "8px 0 0 12px" }}>
          <Stack gap={1}>{children}</Stack>
        </List>
      </Collapse>
    </>
  );
};

export default CustomCollapse;
