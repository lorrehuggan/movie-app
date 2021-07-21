import styled from 'styled-components';
import { flex } from '../../GlobalStyles/mixins';

export const Wrapper = styled.section`
  margin-top: 10vh;
  height: 35rem;
  width: 1280px;
  position: relative;
  z-index: 2;
  border-radius: 40px;
  background-image: url(${({ bannerPath }) => bannerPath});
  background-size: cover;
  background-position: center center;
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
  height: 70%;
  position: absolute;
  opacity: ${({ opacity }) => (opacity ? opacity : '1')};
  bottom: ${({ bottom }) => (bottom ? bottom : '0')};
  z-index: -1;
`;

export const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

export const Container = styled.div`
  margin-top: 3rem;
  z-index: 2;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  padding: 0rem 5rem;
`;
export const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 0;
  z-index: 2;
  cursor: pointer;
  ${flex}
  width: 100%;
`;

export const BannerButton = styled.div`
  margin: 0rem 5rem;
  border: none;
  color: white;
  ${flex}
  cursor: pointer;
`;

export const BannerInfo = styled.p``;

export const Icon = styled.div`
  margin-left: 1rem;
  padding: 0.75rem;
  border-radius: 50%;
  border: 2px solid #ffffff;
  font-size: 1.5rem;
  ${flex}
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
