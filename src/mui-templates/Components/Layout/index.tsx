import React, { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideMenu from "./SideMenu";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <SideMenu handleDrawerToggle={handleDrawerToggle} isOpen={isOpen} />
      <div>
        <Header handleDrawerToggle={handleDrawerToggle} />
        <Box marginTop="70px" position="relative" display="block">
          <Outlet />
        </Box>
      </div>
    </div>
  );
};

export default Layout;
