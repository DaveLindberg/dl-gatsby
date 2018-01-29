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

const Headline = styled.h1`
  color: #cc9900;
  font-family: 'Oswald', sans-serif;
  font-size: 4em;
  text-transform: capitalize;
  text-align: center;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  span {
    color: #999999;
    font-size: 60%;
  }
  @media (max-width: 767px) {
    font-size: 3em;
  }
`;

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
  .inactive {
    display: grid;
    background-size: cover;
    background-position: top center;
    font-size: 1.2em;
    grid-template-columns: 1fr 1em;
    grid-template-rows: 1fr;
    overflow: hidden;
    .color-overlay {
      background-color: rgba(0, 0, 0, 0);
      grid-column: 1 / -1;
      grid-row: 1 / -1;
      display: grid;
      min-height: 0px;
    }
    .closer,
    p,
    a {
      display: none;
    }
    :hover {
      font-size: 1.2em;
      border: 1px solid white;
      align-self: stretch;
      text-align: center;
      .color-overlay {
        background-color: rgba(0, 0, 0, 0.4);
        transition: background 0.5s;
        padding: 0em;
      }
      h2 {
        height: 100%;
        padding: 0px;
        font-size: 2em;
        grid-row: 2 / 3;
        @media (max-width: 767px) {
          font-size: 1.5em;
        }
      }
    }
  }
  .inactive h2,
  .active h2 {
    padding: 0% 7%;
    margin: 0px;
    cursor: pointer;
    color: #ffffff;
    text-transform: capitalize;
    text-shadow: 2px 2px 4px #000;
    @media (max-width: 767px) {
      padding: 0 0;
      text-align: center;
    }
  }
  .active {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    max-height: 100vh;
    background-size: cover;
    background-position: center center;
    transition: all 1s ease;
    z-index: 100;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: stretch;

    .color-overlay {
      grid-column: 1 / 2;
      grid-row: 1 / -1;
      max-height: inherit;
      overflow: scroll;
      padding: 0em;
      display: grid;
      grid-template-columns: 1fr 1em;
      grid-template-rows: 1em 3fr 1fr 2fr;
      background-color: rgba(0, 0, 0, 0.4);
      transition: background 0.5s;
    }
    .closer {
      display: block;
      padding: 1em;
      cursor: pointer;
      grid-column: 2 / -1;
      grid-row: 1 / 2;
      justify-self: end;
    }

    h2 {
      font-size: 5em;
      color: #999900;
      text-align: center;
      padding: 0 4em;
      grid-column: 1 / -1;
      grid-row: 2 / 3;
      align-self: center;
      @media (max-width: 767px) {
        font-size: 2em;
        padding: 0 0em;
        grid-row: 2 / 3;
      }
    }
    p {
      grid-column: 1 / -1;
      grid-row: 3 / 4;
      padding: 0 25%;
      font-weight: 300;
      text-shadow: 0px 0px 4px #000;
      @media (max-width: 767px) {
        font-size: 1em;
      }
    }
    a {
      grid-column: 1 / -1;
      grid-row: 4 / -1;
      align-item: center;
      align-self: start;
      justify-self: center;
      @media (max-width: 767px) {
        font-size: 1em;
        text-align: center;
        margin: 0 10%;
      }
    }
    a:hover {
      color: #999900 !important;
      border-color: #999900 !important;
      background: rgba(0, 0, 0, 0.8);
    }
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
    console.log(itemId, isActive);
  }
  render() {
    const { data: { allMarkdownRemark: { edges } } } = this.props;
    console.log(this.props.data.allMarkdownRemark.edges);
    const Squares = this.props.data.allMarkdownRemark.edges.map(edge => (
      <Square
        key={edge.node.id}
        id={edge.node.id}
        title={edge.node.frontmatter.tile}
        message={edge.node.frontmatter.message}
        background={edge.node.frontmatter.image}
        cta={edge.node.frontmatter.cta}
        link={edge.node.frontmatter.link}
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
        <Headline>
          <span>Growing Your Business Takes </span>
          <br />
          More Than a Web Site.
        </Headline>
        {Squares}
      </StyledMain>
    );
  }
}

export default Main;

const bgImageChooser = title =>
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
  }[title]);

const StyledSquare = styled.div`
  background: url(${props => bgImageChooser(props.title)});
  background-size: cover;
  padding: 0em;
`;

const ColorOverlay = styled.div`
  padding: 2em;
  @media (max-width: 767px) {
    padding: 1em 0;
  }
`;
const Closer = styled.div`
  color: #ffffff;
  cursor: pointer;
`;
const SquareH2 = styled.h2`
  color: darkgoldenrod;
  font-family: 'Oswald', sans-serif;
  font-size: 1.2em;
  text-transform: capitalize;
  @media (max-width: 767px) {
    font-size: 1em;
  }
`;
const Message = styled.p`
  color: #ffffff;
  text-align: center;
  font-size: 1.2em;
  font-weight: 100;
  line-height: 1.6em;
`;
const LinkButton = styled.a`
  display: block;
  color: #cc9900 !important;
  font-size: 1.4em;
  font-weight: 400;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.5em 2em;
  border: 3px solid #cc9900;
  border-radius: 6px;
`;

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
      <StyledSquare
        onClick={this.handleIsActiveChange}
        className={this.props.className + ' ' + this.props.title}
        key={this.props.id}
        title={this.props.title}
        cta={this.props.cta}
        link={this.props.link}
      >
        <ColorOverlay className="color-overlay">
          <Closer className="closer">X</Closer>
          <SquareH2>{this.props.title}</SquareH2>
          <Message className="message">{this.props.message}</Message>
          <LinkButton className="LinkButton" href={this.props.link}>
            {this.props.cta}
          </LinkButton>
        </ColorOverlay>
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
            title
            tile
            tilenum
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
