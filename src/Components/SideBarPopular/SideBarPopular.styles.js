import styled from 'styled-components';
import { flex } from '../../GlobalStyles/mixins';

export const List = styled.ul``;

export const Movie = styled.li`
  ${flex}
  margin-bottom: 1rem;
  position: relative;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 70px;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 10px;
  align-items: center;
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.08);
  }
`;
export const Title = styled.p`
  position: absolute;
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: 700;
  top: 5px;
  right: 0;
  width: 45%;
  cursor: pointer;

  transition: color 0.8s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Rating = styled.small`
  position: absolute;
  font-size: ${({ theme }) => theme.fontSize.body};
  bottom: 5px;
  right: 0;
  width: 45%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;
