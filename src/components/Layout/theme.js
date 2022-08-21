import { css } from 'styled-components';

export const sizes = {
  mobile: '480px',
  tablet: '768px',
  fablet: '1000px',
  desktop: '1200px',
};

const themeCommon = {
  shadow: '0px 10px 10px rgba(0, 0, 0, 0.2)',
  shadowSmall: '0px 5px 10px rgba(0, 0, 0, 0.05)',
  fontFamily: '"Montserrat", sans-serif',
  secondaryFontFamily: '"Karla", sans-serif',
  spacing: {
    sectionBottom: 'margin-bottom: 100px',
    sectionTop: 'margin-top: 100px',
    sectionTopBottom: css`
      margin-top: 100px;
      margin-bottom: 100px;
    `,
  },
  media: {
    mobile: `(max-width: ${sizes.mobile})`,
    tablet: `(max-width: ${sizes.tablet})`,
    fablet: `(max-width: ${sizes.fablet})`,
    desktop: `(max-width: ${sizes.desktop})`,
    minMobile: `(min-width: ${sizes.mobile})`,
    minTablet: `(min-width: ${sizes.tablet})`,
  },
  // gradient: 'linear-gradient(134deg, #6A98F0 0%, #4961DC 99%)',

  gradient: 'linear-gradient(134deg, #0082c8 0%, #0071ad 99%)',
  gradient2: 'linear-gradient(99deg, #0082c8 0%, #0071ad 130%)',
  swapIfDark(prop1, prop2) {
    return `${this.dark ? this[prop1] : this[prop2]};`;
  },
};

export const themelight = {
  dark: false,
  bg: '#F8F8F8',
  primaryColor: '#008AD4', //Code Color
  secondaryColor: '#F8F8F8', //Code card color
  accentColor: '#C5EBFF', //Toggler bg color
  primaryBlack: '#ffffff',
  primaryText: '#383838',
  ...themeCommon,
};

export const themedarkblue = {
  dark: true,
  bg: '#0B0D18',
  primaryColor: '#008AD4',
  secondaryColor: '#F8F8F8',
  accentColor: '#15182E',
  primaryBlack: '#ffffff',
  elevation0: '#0082c8',
  primaryText: '#F8F8F8',
  ...themeCommon,
};

export const themedark = {
  dark: true,
  bg: '#191919',
  primaryColor: '#008AD4', //Button color
  secondaryColor: '#313131', //navbar + code card bg + cards bg
  accentColor: '#444444', //Project cards bg + togglerbg + particles transparent
  primaryBlack: '#F8F8F8',
  elevation0: '#F10000',
  primaryText: '#F8F8F8', //All text
  ...themeCommon,
};
