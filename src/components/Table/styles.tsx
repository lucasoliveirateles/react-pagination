import styled from 'styled-components';

export const Page = styled.table`
  min-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Table = styled.table`
  width: 500px;
  border-collapse: collapse;

  th {
    padding: 10px;
    background: #bcbcbc;
    text-align: left;
  }

  tbody {
    width: 100%;

    tr {
      text-align: left;
      border-bottom: 1px solid #bcbcbc;
    
      td {
        padding: 10px;
        text-align: left;
      }
    }
  }
`;

export const Pagination = styled.div`
  min-width: 500px;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

export const PaginationButton = styled.div`
  display: flex;
`;

export const PaginationItem = styled.div`
  margin: 0 10px;
  cursor: pointer;
`;
