import React from "react";
import { Box } from "@mui/material";
import { corGeral } from "../../../../Styles/cores";
import LogoTelegen from "../../../../Assets/Img/Telegen/logo-telegen.png";

export const TELEGEN_FOOTER_HEIGHT = "85px";

const TelegenFooter = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={TELEGEN_FOOTER_HEIGHT}
      sx={{
        backgroundColor: corGeral.navyBlue,
        color: "white",
      }}
    >
      <img
        src={LogoTelegen}
        alt="Logo Telegen"
        height="fit-content"
        width="200px"
      />
    </Box>
  );
};

export default TelegenFooter;
