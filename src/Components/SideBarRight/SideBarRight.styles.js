import styled from 'styled-components';
import { media } from '../../GlobalStyles/mediaQueries';

//Mixins
import { flex } from '../../GlobalStyles/mixins';

export const Wrapper = styled.section`
  position: fixed;
  right: ${({ openClose }) => (openClose ? '0' : '-21rem')};
  top: 0;
  height: 100vh;
  z-index: 6;
  transition: right 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const SideContainer = styled.div`
  height: 100vh;
  width: 15vw;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  border-left: 1px solid rgba(255, 255, 255, 0.05);
  position: absolute;
  right: ${({ openClose }) => (openClose ? '0' : '-21rem')};
  top: 0;
  position: relative;
  ${flex};
  transition: right 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  ${media.tablet} {
    width: 70vw;
  }
`;

export const Popular = styled.div`
  width: 60%;
  margin-top: 0rem;
  ${media.tablet} {
    margin-top: 3.2rem;
    width: 45%;
  }
`;

export const Header = styled.div`
  color: rgb(185, 185, 185);
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;
