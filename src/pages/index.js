import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import espressoluv from '../assets/images/espressoluv.png'; //01
import meshpipe from '../assets/images/meshpipe.jpg'; //02
import timclue from '../assets/images/timclue.png'; //03

console.log(espressoluv);
console.log(meshpipe);

const StyledMain = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(100px, auto) repeat(4, 20vh);
  grid-auto-rows: 0px;
  grid-gap: 0px;
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: minmax(60px, auto) repeat(6, 14vh);
  }
`;
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
        background={edge.node.frontmatter.image}
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
    return (
      <StyledMain className="main" id="marketing">
        {Squares}
      </StyledMain>
    );
  }
}

export default Main;

const bgImageChooser = title => {
  if (title == 'brands') return espressoluv;
  else return meshpipe;
};

const StyledSquare = styled.div`
  background: url(${props => bgImageChooser(props.title)});
  padding: 0em;
`;

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.handleIsActiveChange = this.handleIsActiveChange.bind(this);
  }

  handleIsActiveChange(e) {
    this.props.onIsActiveChange(this.props.id, !this.props.isActive);
  }

  function() {
    const backgroundurl = this.props.title;
    backgroundurl: 'brands' ? { espressoluv } : { meshpipe };
  }

  render() {
    return (
      <StyledSquare
        onClick={this.handleIsActiveChange}
        className={this.props.className + ' ' + this.props.title}
        key={this.props.tilenum}
        title={this.props.tile}
      >
        <h2>{this.props.title}</h2>
        <div className="message">{this.props.message}</div>
      </StyledSquare>
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
