import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledFooter } from "./stylecomponent/StyledFooter.Style";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { ThemeProvider } from "styled-components";
import StyledFont from "./stylecomponent/Font.Styled";
import styles from "./style/Font.module.css";

const theme = {
  footer: {
    color: {
      background: "#E94B3CFF",
      text: "#2D2926FF",
    },
  },
};

const Footer = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledFooter>
          <div>
            <h1>Porfolio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              nulla consequuntur sint alias blanditiis. Laboriosam dicta cumque
              eaque fugit ullam!
            </p>
            <p>johnmbugua23code@gmail.com</p>
          </div>
          <div>
            <p>Blog</p>
            <p>Contact Me</p>
            <p>Created with love by Mbugua,2023</p>
          </div>
          <StyledFont>
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              className={styles.fontAwesome}
            />
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className={styles.fontAwesome}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className={styles.fontAwesome}
            />
          </StyledFont>
        </StyledFooter>
      </ThemeProvider>
    </>
  );
};

export default Footer;
