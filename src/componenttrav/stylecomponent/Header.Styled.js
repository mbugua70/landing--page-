import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.header.color.background};
  color: ${(props) => props.theme.header.color.text};
  width: 100%;
  padding: 40px 30px;
  margin: 0;
`;
