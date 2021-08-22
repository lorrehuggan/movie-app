import styled from 'styled-components';
import { flex } from '../../GlobalStyles/mixins';
import { media } from '../../GlobalStyles/mediaQueries';

export const Wrapper = styled.section`
  height: 35rem;
  width: 1280px;
  position: relative;
  z-index: 2;
  border-radius: 40px;
  background-image: url(${({ bannerPath }) => bannerPath});
  background-size: cover;
  background-position: center center;
  ${media.tablet} {
    width: 90vw;
    margin: auto;
  }
  ${media.laptop} {
    width: 90vw;
    margin: auto;
  }
`;

export const Gradient = styled.section`
  background: linear-gradient(
    to ${({ direction }) => (direction ? direction : 'top')},
    hsl(0, 0%, 6%),
    hsla(0, 0%, 6%, 0.75),
    hsla(0, 0%, 6%, 0.6),
    hsla(0, 0%, 6%, 0)
  );
  width: 100%;
  height: 50%;
  position: absolute;
  opacity: ${({ opacity }) => (opacity ? opacity : '1')};
  bottom: ${({ bottom }) => (bottom ? bottom : '0')};
  z-index: -1;
`;

export const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: 20rem;
`;

export const Container = styled.div`
  margin-top: 3rem;
  z-index: 2;
  padding: 0rem 5rem;
  ${media.tablet} {
    padding: 0rem 2rem;
  }
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 0;
  z-index: 2;
  cursor: pointer;
  ${flex}
  width: 100%;
  ${media.tablet} {
  }
`;

export const BannerButton = styled.div`
  margin: 0rem 5rem;
  border: none;
  color: white;
  ${flex}
  cursor: pointer;
  ${media.tablet} {
    margin: 0rem 2rem;
  }
`;

export const BannerInfo = styled.p``;

export const Icon = styled.div`
  margin-left: 1rem;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  border: 2px solid #ffffff;
  font-size: 1.5rem;
  ${flex}
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Rating = styled.p`
  ${flex}
  border-radius: 50%;
  border: 2px solid white;
  height: 2.5rem;
  width: 2.5rem;
  color: #ffffff;

  margin-top: 0.5rem;
  font-weight: 900;
  margin-left: 1rem;
`;
