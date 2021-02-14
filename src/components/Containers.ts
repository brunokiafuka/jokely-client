import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  @media (max-width: 650px) {
    padding: 20px 15px !important;
  }
`;
