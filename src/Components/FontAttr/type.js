import styled from 'styled-components';

export const Header1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.hero};
  color: ${({ color }) => (color ? color : '#ffffff')};
  font-weight: ${({ weight }) => (weight ? weight : '')};
  text-align: ${({ align }) => (align ? align : '')};
`;
export const Header2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.header};
  color: ${({ color }) => (color ? color : '#ffffff')};
  font-weight: ${({ weight }) => (weight ? weight : '')};
  text-align: ${({ align }) => (align ? align : '')};
`;
export const Header3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.subHeader};
  color: ${({ color }) => (color ? color : '#ffffff')};
  font-weight: ${({ weight }) => (weight ? weight : '')};
  text-align: ${({ align }) => (align ? align : '')};
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body};
  color: ${({ color }) => (color ? color : '#ffffff')};
  font-weight: ${({ weight }) => (weight ? weight : '')};
  text-align: ${({ align }) => (align ? align : '')};
`;
