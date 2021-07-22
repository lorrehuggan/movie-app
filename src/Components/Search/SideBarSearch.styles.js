import styled from 'styled-components';

import { flex } from '../../GlobalStyles/mixins';

export const Wrapper = styled.div`
  position: absolute;
  ${flex};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 900;
  width: 70%;
  top: 0;
  height: 10vh;
  text-align: left;
  z-index: 999;
`;

export const Form = styled.form`
  ${flex};
  height: 2.5rem;
`;

export const SearchInput = styled.input`
  border: none;
  height: 100%;
  padding-left: 1rem;
  color: gray;
  font-size: 1.1rem;
  outline: none;
  border-radius: 5px 0px 0px 5px;
`;

export const Button = styled.button`
  ${flex};
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100%;
  width: 40px;
  cursor: pointer;
  border-radius: 0px 5px 5px 0px;
  transition: 0.2s ease all;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryAlt};
  }
`;
