import styled from '@emotion/styled';

export const StatList = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
`;
export const StatListItem = styled.li`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  &:nth-of-type(2n) {
    background-color: #baacc7;
  }
  &:nth-of-type(2n + 1) {
    background-color: #c6df90;
  }
`;
export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
