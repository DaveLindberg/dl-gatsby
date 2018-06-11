import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: #fff;
  padding: 1rem 1.5rem;
`;

const NavDiv = styled.div`
  justify-self: end;
  padding-left: 1em;
`;

const ListLink = props => (
  <li
    style={{
      display: 'block',
      marginBottom: 0
    }}
  >
    <NavLink to={props.to}>{props.children}</NavLink>
  </li>
);

const BrandLink = styled(Link)`
  text-decoration: none;
  color: #999900;
  font-weight: 400;

  @media (max-width: 767px) {
    font-size: 18px;
    display: block;
    padding: 0rem 0;
    line-height: 133%;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #cc9900;
  padding: 0 0.75rem;
  white-space: ${props => (props.phone ? 'nowrap' : 'normal')};
  font-weight: ${props => (props.bold ? 400 : 300)};
  cursor: pointer;

  &:hover {
    color: #999900;
  }

  @media (max-width: 767px) {
    font-size: 18px;
    display: block;
    padding: 0rem 0;
    line-height: 133%;
  }
`;

const Header = () => (
  <NavBar className="NavBar">
    <BrandLink brand bold to="/" className="home">
      Dave&nbsp;Lindberg Marketing&nbsp;&&nbsp;Design
    </BrandLink>
    <NavDiv className="NavDiv">
      <ListLink to="/#marketing" style="color: #CC9900">
        Marketing
      </ListLink>
      <ListLink to="/#design">Design</ListLink>
      <ListLink to="/#contact">Contact</ListLink>
      <NavLink phone bold href="tel:802-282-3368">
        802 282-3368
      </NavLink>
    </NavDiv>
  </NavBar>
);

export default Header;
