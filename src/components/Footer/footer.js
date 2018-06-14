import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/lib/fa';

const FooterContent = styled.div`
  display: grid;
  background-color: #eceaea;
  font-size: 80%;
  line-height: 150%;
  grid-template-columns: 0.5rem 1fr 2fr 0.5rem;
  grid-gap: 10px;
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    grid-template-columns: 0.5rem 1fr 0.5rem;
  }
  a {
    text-decoration: none;
    color: #cc9900;
    :hover {
      color: #999900;
    }
  }
`;
const FooterLinkList = styled.div`
  grid-column: 3;
  @media (max-width: 767px) {
    grid-column: 2;
  }
`;

const FooterLink = props => (
  <li
    style={{
      display: 'block',
      marginRight: '1rem'
    }}
  >
    <Link
      to={props.to}
      style={{
        textDecoration: 'none',
        color: '#CC9900'
      }}
    >
      {props.children}
    </Link>
  </li>
);

const Footer = () => (
  <FooterContent>
    <div
      className="copy-and-brand"
      style={{
        gridColumn: 2
      }}
    >
      <p>&copy; 2018 Dave Lindberg Marketing & Design, LLC </p>
      <p>
        <FaLinkedin color="#999900" />
        <a href="https://www.linkedin.com/in/davelindberg/" target="blank">
          {' '}
          /DaveLindberg
        </a>
      </p>
      <p>
        <FaGithub color="#999900" />
        <a href="https://github.com/DaveLindberg" target="blank">
          {' '}
          /DaveLindberg
        </a>
      </p>
    </div>
    <FooterLinkList>
      <FooterLink to="/" className="home">
        Home
      </FooterLink>
      <FooterLink to="/#marketing">Marketing</FooterLink>
      <FooterLink to="/#design">Design</FooterLink>
      <FooterLink to="/#contact">Contact</FooterLink>
    </FooterLinkList>
    <p
      style={{
        fontSize: '80%',
        lineHeight: '150%',
        gridColumnStart: 2,
        gridColumnEnd: 4
      }}
    >
      All brands and images are property of their respective owners. Additional
      photos courtesy Hermes Rivera, Nick Seliverstov and Mario Purisic via
      Unsplash.
    </p>
  </FooterContent>
);

export default Footer;
