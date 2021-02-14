import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border: 0;
  text-align: center;
  padding: 10px;
  border-radius: 4px;
  background-color: #16a085;
  color: #ffff;
  &:hover {
    background-color: #27ae60;
  }
`;
export const RowButtonContainer = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-evenly;
  width: 100%;
`;
