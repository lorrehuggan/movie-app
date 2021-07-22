import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Mixins
import { flex } from '../../GlobalStyles/mixins';

export const Navigation = styled.nav`
  ${flex}
  width: 100%;
  height: 4rem;
  color: white;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 4;
  padding: 2rem 0rem;
`;

export const NavContainer = styled.div`
  ${flex}
  width: 1280px;
  background-color: ${({ showNav, theme }) =>
    showNav ? theme.colors.primaryDark : 'transparent'};
  transition: background-color 0.5s ease;
`;

export const LinksContainer = styled.ul`
  ${flex}
  height: 10vh;
  width: 50%;
  list-style: none;
`;

export const Links = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.body};
  cursor: pointer;
  transition: color 0.3s ease;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ color }) => (color ? color : '#ffffff')};
  &:hover {
    color: ${({ theme, hover }) => (hover ? hover : theme.colors.primary)};
  }
`;

export const UserLog = styled.div`
  ${flex}
`;
