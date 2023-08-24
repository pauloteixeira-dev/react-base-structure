import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ptBR } from "date-fns/locale";
import InterceptorsWrapper from "./InterceptorsWrapper";
import { GlobalContextProvider } from "../hooks/useGlobalContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ptBR as muiPtBR } from "@mui/material/locale";
import { corGeral } from "../Styles/cores";

type TProps = {
  children?: any;
};

const Providers = ({ children }: TProps) => {
  const theme = createTheme(
    {
      palette: {
        primary: { main: corGeral.navyBlue },
      },
    },
    muiPtBR
  );

  return (
    <GlobalContextProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
        <ThemeProvider theme={theme}>
          <InterceptorsWrapper />
          {children}
        </ThemeProvider>
      </LocalizationProvider>
    </GlobalContextProvider>
  );
};

export default Providers;
