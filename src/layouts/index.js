import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from '../components/Header/index.js';
import Footer from '../components/Footer/footer.js';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Dave Lindberg Marketing &amp; Design &bull; Hartland, Vermont"
      meta={[
        {
          name: 'description',
          content:
            "We help people and companies bridge the gap between what's beautiful and what's effective. Delivering compelling solutions from a small town in Vermont."
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        /* maxWidth: 960,*/
        padding: '0px 0rem 0rem',
        gridRowStart: 1,
        gridRowEnd: 1
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
