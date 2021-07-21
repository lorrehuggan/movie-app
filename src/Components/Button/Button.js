import styled from 'styled-components';

export const Button = styled.button`
  width: ${({ width }) => (width ? width : '100%')};
  height: 2.5rem;
  border: none;
  background-color: ${({ primary, theme, color }) =>
    primary ? theme.colors.primary : color};
  color: white;
  font-size: 1rem;
  padding: 0 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 4px;
  text-transform: uppercase;
  &:hover,
  &:active {
    background-color: hsl(194, 75%, 42%);
  }
`;
