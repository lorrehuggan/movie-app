import styled from 'styled-components';
import { flex, noDisplay } from '../../GlobalStyles/mixins';
import { media } from '../../GlobalStyles/mediaQueries';

export const Wrapper = styled.section`
  width: 80rem;
  left: 0;
  overflow-x: hidden;
  position: relative;
  ${media.tablet} {
    width: 90vw;
  }
  ${media.laptop} {
    width: 90vw;
  }
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
    to right,
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

export const Header = styled.header`
  ${flex};
  width: 100%;
  height: 90px;
`;

export const Buttons = styled.div`
  ${flex}
`;

export const ScrollButton = styled.button`
  padding: 0.1rem 1.4rem;
  margin-left: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.25rem;
  color: white;
  opacity: 1;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryAlt};
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  transition: transform 0.8s ease;
`;
