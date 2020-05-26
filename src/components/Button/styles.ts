import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  height: 56px;
  width: 100%;
  background: #ff9000;
  color: #312e38;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  font-weight: bold;
  margin-top: 16px;
  transition: background-color 200ms;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
