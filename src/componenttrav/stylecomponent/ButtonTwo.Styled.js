import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.header.color.text};
  color: #fff;
  padding: 15px 60px;
  border-radius: 50px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  border-style: none;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
export default Button;
