const { styled } = require('styled-components');

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  width: 450px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Item = styled.li`
  padding: 10px;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;
