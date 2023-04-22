import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import * as React from "react";

import theme from "./index";

type Props = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
