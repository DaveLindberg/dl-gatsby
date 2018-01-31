import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import espressoluv from '../assets/images/espressoluv.png'; //01
import meshpipe from '../assets/images/meshpipe.jpg'; //02
import timclue from '../assets/images/timclue.png'; //03
import mychart from '../assets/images/mychart.jpg'; //04
import seedlings from '../assets/images/seedlings.jpg'; //05
import swimmer from '../assets/images/swimmer.jpg'; //06
import sky from '../assets/images/sky.jpg'; //07
import firepit from '../assets/images/firepit.jpg'; //08
import overland from '../assets/images/overland.jpg'; //09
import stoplight from '../assets/images/stoplight.jpg'; //10
import jimbo from '../assets/images/jimbo.jpg'; //11
import rally from '../assets/images/rally.png'; //12

const ImageChooser = tile =>
  ({
    brands: espressoluv,
    generate: meshpipe,
    leads: timclue,
    campaigns: mychart,
    build: seedlings,
    users: swimmer,
    experiences: sky,
    engage: firepit,
    customers: overland,
    interactions: stoplight,
    attract: jimbo,
    people: rally
  }[tile]);

const HTML = styled.div`
  h1 {
    grid-row: 1 / 1;
    align-self: stretch;
  }
  div {
    grid-row: 2 / -1;
  }
`;

export default ({ data }) => {
  const page = data.markdownRemark;
  console.log(data.markdownRemark, espressoluv);
  return (
    <div
      style={{
        display: `grid`,
        gridTemplateColumns: `minmax(0,20%) minmax(10%,20%) minmax(40%,70%) minmax(10%,20%) minmax(0,20%)`,
        gridColumnGap: `30px`,
        gridTemplateRows: `auto repeat(4, 25vh)`
      }}
    >
      <img
        src={ImageChooser(data.markdownRemark.frontmatter.tile)}
        style={{
          gridColumn: `1 / -1`,
          gridRow: `1 / 3`,
          justifySelf: `center`,
          zIndex: 10
        }}
      />
      <HTML
        dangerouslySetInnerHTML={{ __html: page.html }}
        style={{
          display: `grid`,
          gridTemplateRows: `auto repeat(3,25vh)`,
          gridColumn: `3 / span 1`,
          gridRow: `2 / -1`,
          zIndex: 100
        }}
      />
      <div
        style={{
          gridColumn: `2 / span 1`,
          gridRow: `3 / 3`,
          zIndex: 100
        }}
      >
        {page.frontmatter.pullquote}
      </div>
      <div
        style={{
          gridColumn: `4 / span 1`,
          gridRow: `4 / 4`,
          zIndex: 100
        }}
      >
        {page.frontmatter.testimonial}
      </div>
    </div>
  );
};

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tile
        image
        pullquote
        testimonial
      }
    }
  }
`;
