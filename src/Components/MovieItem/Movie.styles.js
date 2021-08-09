import styled from 'styled-components';
import { flex } from '../../GlobalStyles/mixins';
import { media } from '../../GlobalStyles/mediaQueries';

export const Wrapper = styled.div``;

export const MovieContainer = styled.div`
  position: relative;
`;

export const MovieText = styled.h2`
  position: absolute;
  bottom: 0;
  left: 0;
  color: white;
  padding-bottom: 3rem;
  padding-left: 2rem;
  text-transform: uppercase;
  font-size: 1rem;
`;

export const MovieImage = styled.img`
  object-fit: contain;
  width: 290px;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 10px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
`;
