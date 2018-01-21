import React from 'react';
import Link from 'gatsby-link';

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>{data.allMarkdownRemark.totalCount} Pages</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h4>
            {node.frontmatter.index}{' '}
            <span color="#BBB">— {node.frontmatter.tile}</span>
          </h4>
          <p>{node.frontmatter.message}</p>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: 'none', color: 'inherit' }}
          >
            {node.frontmatter.cta}
          </Link>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___index], order: ASC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tile
            message
            image
            cta
            pullquote
            testimonial
            link
          }
        }
      }
    }
  }
`;
