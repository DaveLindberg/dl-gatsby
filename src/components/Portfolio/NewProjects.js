import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';

export default ({ data }) => {
  console.log(data);
  return <div>Hello world</div>;
};

export const query = graphql`
  query PortfolioQuery {
    allMarkdownRemark(
      filter: { frontmatter: { contenttype: { eq: "project" } } }
      sort: { fields: [frontmatter___index], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            contenttype
            title
            client
            creative_fields
            card_image {
              id
            }
            image_1
            image_2
            image_3
            image_4
            see_also
          }
        }
      }
    }
  }
`;
