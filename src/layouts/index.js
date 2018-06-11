import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from '../components/Header/header.js';
import { FaLinkedin, FaGithub } from 'react-icons/lib/fa';

// import './index.css';

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: 20px;
  background-color: #eceaea;
  padding: 1rem 2rem 2rem;
  font-size: 80%;
  line-height: 150%;
  a {
    text-decoration: none;
    color: #cc9900;
    :hover {
      color: #999900;
    }
  }
`;

const FooterContentBrand = styled.div`
  grid-column: 2 / 2;
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
    <p
      style={{
        gridColumnStart: 2,
        gridColumnEnd: 4,
        marginTop: '1em',
        marginBottom: 0
      }}
    >
      &copy; 2018 Dave Lindberg Marketing & Design{' '}
    </p>
    <FooterContentBrand>
      <FooterLink to="/" className="home">
        Home
      </FooterLink>
      <FooterLink to="/#marketing">Marketing</FooterLink>
      <FooterLink to="/#design">Design</FooterLink>
      <FooterLink to="/#contact">Contact</FooterLink>
    </FooterContentBrand>
    <div>
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

const TemplateWrapper = ({ children }) => (
  <div>
    <div
      className="page-wrap"
      style={{
        display: 'grid',
        margin: '0 auto',
        padding: '0px 0rem 0rem',
        gridRowStart: 1,
        gridRowEnd: 3
      }}
    >
      <Helmet
        title="Dave Lindberg Marketing &amp; Design &bull; Lebanon, New Hampshire"
        meta={[
          {
            name: 'description',
            content:
              "We help people and companies bridge the gap between what's beautiful and what's effective. Delivering compelling solutions from the Upper Valley."
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
          }
        ]}
      />
      <Header />
      <div
        className="content-wrapper"
        style={{
          margin: '0 auto',
          /* maxWidth: 960,*/
          padding: '0px 0rem 0rem',
          gridRowStart: 2,
          gridRowEnd: 2
        }}
      >
        {children()}
      </div>
      <Footer />
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
