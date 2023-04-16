import React from "react";
import StyledButton, { FancyButton } from "./Button/Button.style";

// learning about styled component
// styling the button below

const Button = () => {
  return (
    <>
      <StyledButton>SUBMIT</StyledButton>
      <StyledButton variant="outline">SUBMIT</StyledButton>
      <FancyButton variant="fancy">SUBMIT</FancyButton>
    </>
  );
};

export default Button;
