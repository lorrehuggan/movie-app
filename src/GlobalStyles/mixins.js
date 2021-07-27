import { css } from 'styled-components';

export const flex = css`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'column')};
  align-items: ${({ align }) => (align ? align : 'center')};
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
`;

export const noDisplay = css`
  opacity: 0;
  pointer-events: none;
  transition: opacity 1.5s ease;
`;
