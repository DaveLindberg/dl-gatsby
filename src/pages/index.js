import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.index}{" "}
            <span color="#BBB">— {node.frontmatter.tile}</span>
          </h3>
          <p>{node.frontmatter.message}</p>
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
          frontmatter {
            index
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
