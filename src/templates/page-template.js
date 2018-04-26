import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';

import espressoluv from '../assets/images/espressoluv.jpg'; //01
import meshpipe from '../assets/images/meshpipe.jpg'; //02
import timclue from '../assets/images/timclue.jpg'; //03
import mychart from '../assets/images/mychart.jpg'; //04
import seedlings from '../assets/images/seedlings.jpg'; //05
import poolside from '../assets/images/poolside.jpg'; //06
import binoculars from '../assets/images/binoculars.jpg'; //07
import firepit from '../assets/images/firepit.jpg'; //08
import overland from '../assets/images/overland.jpg'; //09
import stoplight from '../assets/images/stoplight.jpg'; //10
import grassy from '../assets/images/grassy.jpg'; //11
import crowd from '../assets/images/crowd.jpg'; //12

const ImageChooser = tile =>
  ({
    brands: espressoluv,
    generate: meshpipe,
    leads: timclue,
    campaigns: mychart,
    build: seedlings,
    users: poolside,
    experiences: binoculars,
    engage: firepit,
    customers: overland,
    interactions: stoplight,
    attract: grassy,
    people: crowd
  }[tile]);

const PageGrid = styled.div`
  display: grid;
  gridtemplatecolumns: minmax(0, 20%) minmax(10%, 20%) minmax(40%, 70%)
    minmax(10%, 20%) minmax(0, 20%);
  gridcolumngap: 30px;
  gridtemplaterows: auto auto auto repeat(2, 25vh);

  .gatsby-image-outer-wrapper {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }
`;

const HTML = styled.div`
  display: grid;
  grid-template-rows: auto repeat(3, auto);
  grid-column: 3 / span 1;
  grid-row: 3 / -1;
  color: #796969;
  a {
    text-decoration: none;
    color: #cc9900;
  }
`;

const Pullquote = styled.div`
  grid-column: 2 / span 1;
  grid-row: 3 / 3;
  color: #2d7173;
  margin-top: 2em;
  font-weight: 700;
  font-style: italic;
  font-size: 90%;
  span {
    font-size: 80%;
    font-style: normal;
    line-height: 80%;
    font-weight: 400;
  }
`;

const Testimonial = styled.div`
  grid-column: 4 / span 1;
  grid-row: 4 / 4;
  color: #b26330;
  font-weight: 400;
  span {
    font-size: 80%;
    font-style: italic;
    line-height: 80%;
    text-align: right !important;
  }
`;

export default ({ data }) => {
  const page = data.markdownRemark;
  console.log(data.markdownRemark);
  return (
    <PageGrid
      style={{
        display: `grid`,
        gridTemplateColumns: `minmax(0,20%) minmax(10%,20%) minmax(40%,70%) minmax(10%,20%) minmax(0,20%)`,
        gridColumnGap: `30px`,
        gridTemplateRows: `auto  auto auto repeat(2, 25vh)`
      }}
    >
      <Img
        sizes={data.markdownRemark.frontmatter.image.childImageSharp.sizes}
        style={{
          gridColumn: `1 / -1`,
          gridRow: `1 / 3`,
          justifySelf: `center`,
          zIndex: 10,
          objectFit: `cover`
        }}
      />
      <h1
        style={{
          display: `grid`,
          gridColumn: `3 / span 1`,
          gridRow: `1 / 3`,
          zIndex: 100,
          alignSelf: `center`,
          color: `#ffffff`,
          textShadow: `2px 2px 4px #000`
        }}
      >
        {page.frontmatter.title}
      </h1>
      <HTML dangerouslySetInnerHTML={{ __html: page.html }} style={{}} />
      <Pullquote
        dangerouslySetInnerHTML={{ __html: page.frontmatter.pullquote }}
      />
      <Testimonial
        dangerouslySetInnerHTML={{ __html: page.frontmatter.testimonial }}
      />
    </PageGrid>
  );
};

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tile
        image {
          childImageSharp {
            sizes(maxWidth: 1240) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        pullquote
        testimonial
      }
    }
  }
`;
