import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from '../components/Header/header.js';
import Footer from '../components/Footer/footer.js';

// import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <div
      className="page-wrap"
      style={{
        display: 'grid',
        margin: '0 auto',
        padding: '0px 0rem 0rem',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'repeat(3,auto)'
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
      <Header
        style={{
          gridRow: 1
        }}
      />
      <div
        className="content-wrapper"
        style={{
          margin: '0 auto',
          /* maxWidth: 960,*/
          padding: '0px 0rem 0rem',
          gridRow: 2
        }}
      >
        {children()}
      </div>
      <Footer
        className="Footer"
        style={{
          gridRow: 3
        }}
      />
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
