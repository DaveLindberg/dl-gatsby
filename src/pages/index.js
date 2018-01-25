import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.handleIsActiveChange = this.handleIsActiveChange.bind(this);
  }
  handleIsActiveChange(itemId, isActive) {
    this.setState({
      activeItem: isActive ? itemId : null,
      activeClassName: isActive ? 'active' : 'inactive'
    });
  }
  render() {
    const { data: { allMarkdownRemark: { edges } } } = this.props;
    console.log(this.props.data.allMarkdownRemark.edges);
    const Squares = this.props.data.allMarkdownRemark.edges.map(edge => (
      <Square
        key={edge.node.frontmatter.tilenum}
        title={edge.node.frontmatter.tile}
        message={edge.node.frontmatter.message}
        isActive={this.state.activeItem === edge.node.frontmatter.tilenum}
        className={
          this.state.activeItem === edge.node.frontmatter.tilenum
            ? this.state.activeClassName
            : 'inactive'
        }
        onIsActiveChange={this.handleIsActiveChange}
      />
    ));
    console.log(Squares);
    return <div>{Squares}</div>;
  }
}

export default Main;

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.handleIsActiveChange = this.handleIsActiveChange.bind(this);
  }

  handleIsActiveChange(e) {
    this.props.onIsActiveChange(this.props.id, !this.props.isActive);
  }
  render() {
    return (
      <div
        onClick={this.handleIsActiveChange}
        className={this.props.className}
        key={this.props.tilenum}
      >
        <h2> {this.props.title} </h2>
        <div className="message"> {this.props.message} </div>
      </div>
    );
  }
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___index], order: ASC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            tilenum
            title
            tile
            message
            image
            cta
            pullquote
            testimonial
            link
          }
          id
        }
      }
    }
  }
`;
