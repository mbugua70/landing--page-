import React from "react";
import image from "./images/one.jpg";
import imageTwo from "./images/five.webp";
import imageThree from "./images/four.jpg";
import {
  StyledImage,
  StyledImageThree,
  StyledImageTwo,
} from "./stylecomponent/ImageTwo.Styled";
import {
  StyledMain,
  StyledMainTwo,
  StyledMainThree,
} from "./stylecomponent/Main.Styled";

const Main = () => {
  return (
    <>
      <StyledMain>
        <div>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            nisi, explicabo minus ipsam rerum repellat sit ut ipsa possimus
            quaerat dignissimos non earum voluptates eos odit quos? Incidunt,
            animi quibusdam?
          </p>
        </div>
        <StyledImage src={image} />
      </StyledMain>
      <StyledMainTwo>
        <div>
          <h1>Lorem Ipsum Dolor Sit Amet</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            nisi, explicabo minus ipsam rerum repellat sit ut ipsa possimus
            quaerat dignissimos non earum voluptates eos odit quos? Incidunt,
            animi quibusdam?
          </p>
        </div>
        <StyledImageTwo src={imageTwo} />
      </StyledMainTwo>
      <StyledMainThree>
        <div>
          <h1>Dolor Sit Amet</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            nisi, explicabo minus ipsam rerum repellat sit ut ipsa possimus
            quaerat dignissimos non earum voluptates eos odit quos? Incidunt,
            animi quibusdam?
          </p>
        </div>
        <StyledImageThree src={imageThree} />
      </StyledMainThree>
    </>
  );
};

export default Main;
