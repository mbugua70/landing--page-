import React from "react";
import Button from "./stylecomponent/ButtonTwo.Styled";
import StyledImage from "./stylecomponent/Image.Styled";
import image from "./images/four.jpg";
import { StyledSectionFlex } from "./stylecomponent/SectionFlex.Styled";
const SectionFlex = () => {
  return (
    <>
      <StyledSectionFlex>
        <div className="flex-one">
          <h1>Building Your Porfolio</h1>
          <h1>Your Fan Will Love</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            est laborum, nulla perferendis corrupti debitis facilis inventore
            vitae incidunt hic quasi voluptatum provident cupiditate mollitia
            unde qui expedita. Atque, illum.
          </p>
          <Button>Get Started For Free</Button>
        </div>

        <StyledImage src={image} />
      </StyledSectionFlex>
    </>
  );
};

export default SectionFlex;
