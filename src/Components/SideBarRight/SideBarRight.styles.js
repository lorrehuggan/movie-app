import styled from 'styled-components';

//Mixins
import { flex } from '../../GlobalStyles/mixins';

export const Wrapper = styled.section`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 6;
`;

export const Container = styled.div`
  height: 85vh;
  width: 15vw;
  color: white;
  ${flex};
`;

export const SideContainer = styled.div`
  height: 100vh;
  width: 15vw;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  border-left: 1px solid rgba(255, 255, 255, 0.05);
  position: absolute;
  left: ${({ sidebar }) => (sidebar ? '0' : '350px')};
  top: 0;
  position: relative;
  ${flex};
  transition: left 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const Popular = styled.div`
  width: 60%;
  margin-top: 2rem;
`;

export const Header = styled.div`
  font-size: 1rem;
  color: rgb(185, 185, 185);
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 3px;
  text-transform: uppercase;
`;
