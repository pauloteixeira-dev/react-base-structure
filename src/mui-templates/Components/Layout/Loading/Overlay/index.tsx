import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

interface ILoadingOverlayProps {
  isVisible?: boolean;
}

const LoadingOverlay = ({ isVisible = true }: ILoadingOverlayProps) => {
  return (
    <Box
      display={isVisible ? "flex" : "none"}
      justifyContent="center"
      alignItems="center"
      zIndex={9999}
      position="fixed"
      top={0}
      height="100vh"
      width="100vw"
      sx={{
        backgroundColor: "rgba(0,0,0,0.8)",
      }}
      color="white"
    >
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default LoadingOverlay;
