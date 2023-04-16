import styled from "styled-components";
const StyledButton = styled.button`
  /* using prop with styled component */
  background-color: ${(props) =>
    props.variant === "outline" ? "#fff" : "crimson"};
  padding: 10px 18px;
  color: ${(props) => (props.variant === "outline" ? "crimson" : "#fff")};
  font-family: verdana;
  border-radius: 6px;
  margin-left: 2rem;
  font-size: 16px;
  border: 2px solid crimson;
  transition: all ease-in-out 600ms;

  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "crimson"};
    color: ${(props) => (props.variant !== "outline" ? "crimson" : "#fff")};
  }
`;

export default StyledButton;

export const FancyButton = styled(StyledButton).attrs({
  type: "submit",
})`
  background-color: ${(props) =>
    props.variant === "fancy" ? "#E94B3CFF" : "#2D2926FF"};
  color: ${(props) => (props.variant === "fancy" ? "#2D2926FF" : "#E94B3CFF")};
  &:hover {
    background-color: ${(props) =>
      props.variant !== "fancy" ? "#E94B3CFF" : "#2D2926FF"};
    color: ${(props) =>
      props.variant !== "fancy" ? "#2D2926FF" : "#E94B3CFF"};
  }
`;
