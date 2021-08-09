const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const media = {
  smallMobile: `@media screen and (max-width: 320px)`,
  mediumMobile: `@media screen and (max-width: 375px)`,
  largeMobile: `@media screen and (max-width: 425px)`,
  tablet: `@media screen and (max-width: 768px)`,
  laptop: `@media screen and (max-width: 1024px)`,
  large: `@media screen and (max-width: 1440px)`,
  desktop: `@media screen and (max-width: 2560px)`,
};
