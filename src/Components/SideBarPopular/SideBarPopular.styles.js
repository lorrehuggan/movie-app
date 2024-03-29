import styled from 'styled-components';
import { flex } from '../../GlobalStyles/mixins';
import { media } from '../../GlobalStyles/mediaQueries';

export const List = styled.ul`
  ${media.laptop} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Movie = styled.li`
  ${flex}
  margin-bottom: 1rem;
  position: relative;
  ${media.laptop} {
    width: 30%;
  }
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100px;
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
  ${media.tablet} {
    width: 70px;
  }
  ${media.laptop} {
    width: 50px;
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
  ${media.laptop} {
    display: none;
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

  ${media.laptop} {
    display: none;
  }
`;
