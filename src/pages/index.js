import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Portfolio from '../components/react-portfolio-behance/src/components/Portfolio/Portfolio.js';
import Projects from '../components/react-portfolio-behance/src/components/Portfolio/Projects.js';

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

const Headline = styled.div`
  font-family: 'Oswald', sans-serif;
  text-transform: capitalize;
  text-align: center;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  h2 {
    color: #999999;
    font-size: 3em;
    margin-bottom: 0px;
    @media (max-width: 767px) {
      font-size: 2em;
    }
  }
  h1 {
    font-size: 4em;
    color: #cc9900;
    @media (max-width: 767px) {
      font-size: 3em;
    }
  }
`;

const StyledMain = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(80px, auto) repeat(4, minmax(200px, 20vh)) repeat(
      2,
      auto
    );
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
      grid-template-rows: 1em 3fr 1fr 1fr 3fr;
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
      font-size: 3em;
      color: #cc9900;
      text-align: center;
      padding: 0 0em;
      grid-column: 1 / -1;
      grid-row: 2 / 3;
      align-self: end;
      margin-bottom: 0.2em;
      @media (max-width: 767px) {
        font-size: 2em;
        padding: 0 0em;
        grid-row: 2 / 3;
      }
    }
  }
`;

const Introtext = styled.div`
  grid-column: 1 / 4;
  grid-row: 6 / 6;
  margin-top: 1.5em;
  display: grid;
  grid-template-columns: minmax(10%, 20%) minmax(40%, 70%) minmax(10%, 20%);
  p {
    grid-column: 2 / 2;
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
  handleIsActiveChange(tilenum, isActive) {
    this.setState({
      activeItem: isActive ? tilenum : null,
      activeClassName: isActive ? 'active' : 'inactive'
    });
    console.log(this.state.activeItem);
  }
  render() {
    const { data: { allMarkdownRemark: { edges } } } = this.props;
    const Squares = this.props.data.allMarkdownRemark.edges.map(edge => (
      <Square
        key={edge.node.id}
        id={edge.node.id}
        tilenum={edge.node.frontmatter.tilenum}
        title={edge.node.frontmatter.tile}
        message={edge.node.frontmatter.message}
        messagex={edge.node.frontmatter.messagex}
        background={edge.node.frontmatter.image}
        cta={edge.node.frontmatter.cta}
        link={edge.node.fields.slug}
        isActive={this.state.activeItem === edge.node.id}
        className={
          this.state.activeItem === edge.node.id
            ? this.state.activeClassName
            : 'inactive'
        }
        onIsActiveChange={this.handleIsActiveChange}
      />
    ));
    console.log(Squares, this.state);
    return (
      <StyledMain className="main" id="marketing">
        <Headline>
          <h2>Growing Your Business Takes </h2>
          <h1>More Than a Web Site.</h1>
        </Headline>
        {Squares}
        <Introtext>
          <p>
            How can you connect your products with the right people? What’s the
            relationship between a branded experience and brand engagement? How
            can you differentiate your service in a way that really matters to
            your market?
          </p>

          <p>
            Questions like these are at the core of what we do. We’re focused on
            developing effective solutions to marketing challenges faced by
            people like you. We design marketing strategies, campaigns, apps,
            (and yes, even web sites) that help people help their customers.
          </p>

          <p>
            We work with businesses and entrepreneurs in Vermont, New Hampshire
            and beyond, helping our clients integrate their marketing efforts,
            improve brand engagement, and realize better results.
          </p>

          <p>
            Get more out of your website, and achieve your marketing goals. Call
            Dave at 802.282.3368 and learn how we can help.
          </p>
        </Introtext>
        <Portfolio user={'DaveLindberg'} showFeatured />
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
    users: poolside,
    experiences: binoculars,
    engage: firepit,
    customers: overland,
    interactions: stoplight,
    attract: grassy,
    people: crowd
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
const Message = styled.div`
  letter-spacing: 1px;
  color: #ffffff;
  text-align: center;
  align-self: center;
  font-size: 1em;
  font-style: italic;
  line-height: 1.8em;
  font-weight: 100;
  grid-column: 1 / -1;
  grid-row: 3 / 3;
  padding: 0 25%;
  text-shadow: 0px 0px 4px #000;
  @media (max-width: 767px) {
    font-size: 1em;
  }
  .intro {
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    font-style: normal;
  }
`;
const LinkButton = styled.a`
  display: block;
  color: #cc9900 !important;
  font-size: 1.2em;
  font-weight: 100;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.5em 2em;
  border: 2px solid #cc9900;
  border-radius: 6px;
  text-decoration: none;
  grid-column: 1 / -1;
  grid-row: 4 / -1;
  align-item: center;
  align-self: start;
  justify-self: center;
  :hover {
    color: #999900 !important;
    border-color: #999900 !important;
    background: rgba(0, 0, 0, 0.8);
  }
  @media (max-width: 767px) {
    font-size: 1em;
    text-align: center;
    margin: 0 10%;
  }
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
          <Message className="message">
            <p className="intro">{this.props.message}</p>
            <p>{this.props.messagex}</p>
          </Message>
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
            messagex
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
