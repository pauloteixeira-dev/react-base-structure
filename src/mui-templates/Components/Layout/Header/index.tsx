import React from "react";
import { AppBar, Box, Toolbar, Button } from "@mui/material";
import { Menu } from "@mui/icons-material";

interface IHeaderProps {
  handleDrawerToggle: () => void;
}

const Header: React.FC<IHeaderProps> = ({ handleDrawerToggle }) => (
  <Box sx={{ display: "flex", position: "fixed", top: 0, zIndex: 2100 }}>
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
        height: "70px",
        color: `white`,
        backgroundColor: `white`,
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Button onClick={handleDrawerToggle} sx={{ zIndex: 999 }}>
          <Menu />
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
