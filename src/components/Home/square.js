import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import scrollToComponent from 'react-scroll-to-component';

import StyledSquare from './styled-square.js';
import ColorOverlay from './color-overlay.js';
import Closer from '../closer.js';
import SquareH2 from './square-h2.js';
import SquareMessage from './square-message.js';
import LinkButton from '../link-button.js';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.handleIsActiveChange = this.handleIsActiveChange.bind(this);
  }

  handleIsActiveChange(e) {
    this.props.onIsActiveChange(this.props.id, !this.props.isActive);
    scrollToComponent(this, {
      offset: -5000,
      align: 'top',
      duration: 1500
    });
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
        <Img
          sizes={this.props.background.childImageSharp.sizes}
          style={{
            gridColumn: '1 / -1',
            gridRow: '1 / -1',
            zIndex: 1,
            objectFit: 'cover',
            height: '100%'
          }}
        />

        <ColorOverlay className="color-overlay">
          <Closer className="closer">X</Closer>
          <SquareH2>{this.props.title}</SquareH2>
          <SquareMessage className="message">
            <p className="intro">{this.props.message}</p>
            <p>{this.props.messagex}</p>
          </SquareMessage>
          <LinkButton className="LinkButton" href={this.props.link}>
            {this.props.cta}
          </LinkButton>
        </ColorOverlay>
      </StyledSquare>
    );
    console.log(StyledSquare, this.state);
  }
}

export default Square;
