import React from "react";
import { StyledHeader } from "./stylecomponent/Header.Styled";
import { ThemeProvider } from "styled-components";
import Nav from "./stylecomponent/Nav.Styled";
import { Button } from "./Button";
import SectionFlex from "./Section";

const theme = {
  header: {
    color: {
      background: "#2D2926FF",
      text: "#E94B3CFF",
    },
  },
};

export default function Header() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledHeader>
          <Nav>
            <h1>Porfolio</h1>
            <Button />
          </Nav>
          <SectionFlex />
        </StyledHeader>
      </ThemeProvider>
    </>
  );
}
