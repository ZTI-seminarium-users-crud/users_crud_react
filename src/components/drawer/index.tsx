import { Drawer } from "@mui/material";
import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const AppDrawer: React.FC<Props> = ({ children }) => {
  return <StyledDrawer>{children}</StyledDrawer>;
};

export default AppDrawer;

const drawerWidth = 240;

const StyledDrawer = styled(Drawer).attrs(() => ({
  variant: "permanent",
  anchor: "left",
}))`
  width: ${drawerWidth}px;

  .MuiDrawer-paper {
    width: ${drawerWidth}px;
  }
`;