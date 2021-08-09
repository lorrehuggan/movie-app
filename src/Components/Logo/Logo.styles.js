import styled from 'styled-components';
import { flex } from '../../GlobalStyles/mixins';
import { media } from '../../GlobalStyles/mediaQueries';

export const MainLogo = styled.div`
  position: absolute;
  ${flex}
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  top: 0;
  height: 10vh;
  text-align: left;
  font-family: 'Oswald', sans-serif;
  font-size: 2.5rem;
  ${media.tablet} {
    font-size: 1.8rem;
  }
`;
