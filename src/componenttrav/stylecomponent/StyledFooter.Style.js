import styled from "styled-components";

export const StyledFooter = styled.footer`
  color: ${(props) => props.theme.footer.color.text};
  background-color: #e94b3cff;
  width: 100%;
  padding: 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  div:nth-child(1) {
    width: 30%;
  }

  div:nth-of-type(2) > p:last-child {
    margin-top: 5.5rem;
    color: ${(props) => props.theme.footer.color.text};
  }
`;
