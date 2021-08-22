import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../../GlobalStyles/mediaQueries';

//Mixins
import { flex } from '../../GlobalStyles/mixins';

export const Wrapper = styled.section`
  position: fixed;
  left: ${({ openClose }) => (openClose ? '0' : '-21rem')};
  top: 0;
  height: 100vh;
  z-index: 6;
  transition: left 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const SideContainer = styled.div`
  height: 100vh;
  width: 15vw;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  position: absolute;
  left: ${({ openClose }) => (openClose ? '0' : '-21rem')};
  top: 0;
  position: relative;
  ${flex};
  transition: left 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  ${media.tablet} {
    width: 30vw;
  }
  ${media.laptop} {
    width: 35vw;
  }
`;

export const LogoContainer = styled.div`
  ${flex}
  width: 100%;
  height: 10vh;
`;

export const LinkContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const MenuList = styled.ul`
  ${flex}
  height: 30%;
  padding: 0rem 6rem;
  margin-top: 4rem;
  ${media.tablet} {
    padding: 0rem 3.5rem;
  }
`;

export const Links = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.subHeader};
  font-weight: 700;
  cursor: pointer;
  transition: color 0.3s ease;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ color }) => (color ? color : '#ffffff')};
  &:hover {
    color: ${({ theme }) => theme.colors.primaryAlt};
  }
  ${media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.body};
  }
`;

export const Signature = styled.div`
  ${flex}
  width: 15vw;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 1rem;
  opacity: 0.1;
  ${media.tablet} {
    width: 100%;
  }
`;
