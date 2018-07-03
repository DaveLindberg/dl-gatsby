import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import scrollToComponent from 'react-scroll-to-component';
import Img from 'gatsby-image';
import Headline from '../components/Home/headline.js';
import Square from '../components/Home/square.js';
import Introtext from '../components/Home/intro-text.js';
import LinkButton from '../components/link-button.js';
import ContacText from '../components/Home/contact-text.js';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const StyledMain = styled.div`
  grid-area: main;
  display: grid;
  padding-bottom: 0px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(80px, auto) repeat(4, minmax(200px, 20vh)) repeat(
      3,
      auto
    );
  grid-auto-rows: 0px;
  grid-gap: 0px;
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: minmax(60px, auto) repeat(6, minmax(200px, 14vh)) repeat(
        3,
        auto
      );
  }
  .gatsby-image-outer-wrapper {
    grid-column: 1 / -1 !important;
    grid-row: 1 / -1;
    overflow: hidden;
  }

  .inactive {
    display: grid;
    font-size: 1.2em;
    grid-template-columns: 1fr 1em;
    grid-template-rows: 1fr;
    overflow: hidden;
    height: 100%;
    object-fit: cover;
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
      display: grid
      font-size: 1.2em;
      grid-template-columns: 1fr 1em;
      grid-template-rows: 1fr;
      overflow: hidden;
      height: 100%;
      object-fit: cover;


      border: 1px solid white;
      align-self: stretch;
      text-align: center;
      .color-overlay {
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 5;
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
    z-index: 10;
    @media (max-width: 767px) {
      padding: 0 0;
      text-align: center;
    }
  }
  .active {
    grid-column: 1 / -1;
    grid-row: 1 / 6;
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
      padding: 0em;
      display: grid;
      grid-template-columns: 1fr 1em;
      grid-template-rows: 1em 3fr 1fr 1fr 3fr;
      background-color: rgba(0, 0, 0, 0.4);
      transition: background 0.5s
      z-index: 10;
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

const TempPortfolioButton = styled(LinkButton)`
  grid-column: 1 / -1;
  grid-row: 9 / 10;
  margin-bottom: 1rem;
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
        key={edge.node.frontmatter.tilenum.toString()}
        id={edge.node.frontmatter.tilenum}
        tilenum={edge.node.frontmatter.tilenum}
        title={edge.node.frontmatter.tile}
        message={edge.node.frontmatter.message}
        messagex={edge.node.frontmatter.messagex}
        background={edge.node.frontmatter.image}
        cta={edge.node.frontmatter.cta}
        link={edge.node.fields.slug}
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
            We work with businesses and entrepreneurs in the Upper Valley and
            nationwide, helping our clients integrate their marketing efforts,
            improve brand engagement, and realize better results.
          </p>

          <p>
            Get more out of your website, and achieve your marketing goals. Call
            Dave at 603.727.2050 and learn how we can help.
          </p>
          <h2>Want a Better Look?</h2>
          {/*
            <p style={{ textAlign: 'center' }}>
              Feel free to browse this selection of projects covering brand
              development, website, catalog and book design.
            </p>
          */}
          <p style={{ marginTop: '1rem' }}>
            Effective design is the art of solving problems. Across multiple
            disciplines &mdash; campaign strategy and UX planning, mobile and
            site development, print and video &mdash; design infuses our work,
            helping to ensure the solutions we deliver are appropriate and
            effective.
          </p>
          <p>
            Feel free to review our portfolio of select projects and artifacts,
            available on Behance.
          </p>
          <OutboundLink
            className="LinkButton"
            href="https://www.behance.net/DaveLindberg"
            style={{
              gridColumn: 2,
              gridRow: 9,
              justifySelf: 'center',
              marginBottom: '1rem',
              /* from component link-button: */
              display: 'block',
              color: '#ffffff',
              fontSize: '1.2em',
              fontWeight: 100,
              background: 'rgba(0, 0, 0, 0.6)',
              padding: '0.5em 2em',
              border: '2px solid #cc9900',
              borderRadius: '6px',
              textDecoration: 'none'
            }}
          >
            Launch Portfolio
          </OutboundLink>
        </Introtext>
        <ContacText id="contact">
          <h2>Get in touch</h2>
          <p>
            Thanks for your interest in connecting. The best ways to contact us
            are email (<a href="mailto:dave@davelindberg.com">
              Dave@DaveLindberg.com
            </a>) and phone (<a href="tel:603-727-2050">603.727.2050</a>).
          </p>
          <p>Our mailing address is PO Box 26, Lebanon, NH 03766.</p>
        </ContacText>
      </StyledMain>
    );
  }
}
export default Main;

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
            cta
            pullquote
            testimonial
            link
            image {
              childImageSharp {
                sizes(maxWidth: 1240) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          id
        }
      }
    }
  }
`;
