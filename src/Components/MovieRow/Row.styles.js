import styled from 'styled-components';
import { flex } from '../../GlobalStyles/mixins';

export const Wrapper = styled.section`
  width: 80rem;
  left: 0;
  overflow-x: hidden;
  position: relative;
`;

export const GradientRight = styled.div`
  background: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.primaryDark},
    hsla(0, 0%, 6%, 0.384),
    rgba(0, 0, 0, 0)
  );
  position: absolute;
  top: 80px;
  right: 0;
  height: 447px;
  width: 90px;
  z-index: 3;
`;

export const GradientLeft = styled.div`
  background: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.primaryDark},
    hsla(0, 0%, 6%, 0.384),
    rgba(0, 0, 0, 0)
  );
  position: absolute;
  top: 80px;
  left: 0;
  height: 447px;
  width: 90px;
  z-index: 3;
`;
