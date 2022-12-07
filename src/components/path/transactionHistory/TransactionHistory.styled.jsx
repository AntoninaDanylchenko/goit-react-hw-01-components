import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
  width: 750px;
  border: 1px solid rgb(255, 255, 255);
`;

export const TransactionTableHead = styled.thead`
  border: 1px solid rgb(255, 255, 255);
  background-color: #78dbe2;
  color: #ffffff;
`;

export const TableHeadCell = styled.th`
  padding: 10px;
`;

export const TableBodyCell = styled.td`
  padding: 10px;
  text-align: center;
`;
export const TableBodyRoll = styled.tr`
  &:nth-of-type(even) {
    background-color: rgba(166, 189, 215, 0.5);
  }
`;
