import styled from "styled-components";

export const TableWrapper = styled.table`
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 10px;
  margin: 0 auto;
  border-spacing: 2px;
`;

export const TableHead = styled.thead`
  border: 1px solid green;
  tr {
    position: sticky;
    top: 0;
    background: white;
    th {
      padding: 12px 8px;
      text-align: left;
    }
  }
`;

export const TableBody = styled.tbody`
  border: 1px solid blue;
  td {
    padding: 12px 18px;
  }
  tr {
  }
  tr:nth-child(odd) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
`;
