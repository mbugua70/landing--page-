import React from "react";
import Container from "./componenttrav/stylecomponent/Container.Styled";
import Header from "./componenttrav/Header";
import GlobalStyle from "./componenttrav/stylecomponent/Global.Styled";
import Main from "./componenttrav/Main";
import Footer from "./componenttrav/Footer";
function AppThree() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Main />
      </Container>
      <Footer />
    </>
  );
}

export default AppThree;
