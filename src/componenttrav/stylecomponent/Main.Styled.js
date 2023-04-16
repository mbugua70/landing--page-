import styled from "styled-components";

export const StyledMain = styled.div`
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.18);
  display: flex;
  padding: 30px;
  & > div {
    flex: 1;
  }
  h1 {
    color: #e94b3cff;
  }
  border-radius: 12px;
`;

export const StyledMainTwo = styled.div`
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.18);
  margin-top: 20px;
  display: flex;
  padding: 30px;
  & > div {
    flex: 2;
    order: 1;
  }
  h1 {
    color: #e94b3cff;
  }
`;

export const StyledMainThree = styled.div`
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.18);
  margin-top: 20px;
  display: flex;
  padding: 30px;
  & > div {
    flex: 1;
    order: 0;
  }
  h1 {
    color: #e94b3cff;
  }
  border-radius: 12px;
`;
