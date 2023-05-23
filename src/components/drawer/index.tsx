import { Drawer as MuiDrawer } from "@mui/material";
import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const Drawer: React.FC<Props> = ({ children }) => {
  return <StyledDrawer>{children}</StyledDrawer>;
};

export default Drawer;

const drawerWidth = 300;

const StyledDrawer = styled(MuiDrawer).attrs(() => ({
  variant: "permanent",
  anchor: "left",
}))`
  width: ${drawerWidth}px;

  .MuiDrawer-paper {
    width: ${drawerWidth}px;
  }
`;
