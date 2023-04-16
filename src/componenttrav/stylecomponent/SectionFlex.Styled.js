import styled from "styled-components";

export const StyledSectionFlex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 40px 0;

  & > div {
    flex: 1;
  }

  h1:first-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  h1:nth-child(2) {
    margin-top: 0;
  }
  p {
    color: #fff;
  }
`;
