import styled from 'styled-components';

export const MovieListWrapp = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-column-gap: 35px;
  grid-row-gap: 15px;
`;

export const MovieListItem = styled.li`
  border: 1px solid black;
  border-radius: 10px;
`;
