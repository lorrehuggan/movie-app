import { css } from 'styled-components';

export const flex = css`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'column')};
  align-items: center;
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
`;
