import React from 'react';
import styled from 'styled-components';
import Wrapper from '@common/Wrapper';

import logo from '@src/static/logo_white.svg';

const FooterWrapper = styled.footer`
  width: 100vw;
  padding: 10px;
  background: ${p =>
    p.theme.dark ? p.theme.secondaryColor : p.theme.gradient};

  p {
    font-size: 1rem;
    line-height: 35px;
    color: white;
  }

  a {
    color: ${p =>
      p.theme.dark ? p.theme.primaryColor : p.theme.secondaryColor};
    &:hover {
      color: ${p => p.theme.primaryText};
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <Wrapper>
      <p style={{ float: 'left' }}>
        Thanks to
        <a href="https://github.com/atiqisrak" target="__blank">
          &nbsp;Anurah Hazra&nbsp;
        </a>
      </p>

      <img width="35px" src={logo} alt="atiq israk" />

      <p style={{ float: 'right' }}>
        Made with love by
        <a href="https://gatsbyjs.org" target="__blank">
          &nbsp;gatsby&nbsp;
        </a>
        and
        <a href="https://github.com/atiqisrak" target="__blank">
          &nbsp;Atiq Israk Niloy
        </a>
      </p>
    </Wrapper>
  </FooterWrapper>
);

export default Footer;
