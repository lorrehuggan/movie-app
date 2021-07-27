import styled from 'styled-components';

import { flex } from '../../GlobalStyles/mixins';

export const Favorites = styled.ul`
  width: 100%;
`;

export const Movies = styled.li`
  position: relative;
  ${flex}
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
