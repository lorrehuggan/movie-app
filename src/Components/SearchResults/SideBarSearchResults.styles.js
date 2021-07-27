import styled from 'styled-components';

import { flex } from '../../GlobalStyles/mixins';

export const Wrapper = styled.div`
  height: 80vh;
  width: 100%;
  ${flex}
`;

export const ButtonContainer = styled.div`
  width: 70%;
  ${flex};
`;

export const List = styled.ul`
  width: 70%;
`;

export const Movies = styled.li`
  position: relative;
  ${flex}
`;

export const MovieTitle = styled.p`
  position: absolute;
  font-size: 1rem;
  color: #ffffff;
  top: 5px;
  right: 0;
  width: 45%;
  transition: color 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MovieRating = styled.small`
  position: absolute;
  font-size: 0.8rem;
  letter-spacing: 3px;
  bottom: 5px;
  right: 0;
  width: 45%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

export const MovieImage = styled.img`
  object-fit: contain;
  width: 100px;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 10px;
  align-items: left;
  text-align: left;
  &:hover {
    transform: scale(1.08);
  }
`;
