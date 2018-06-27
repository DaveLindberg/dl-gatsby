import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 0.5rem 1fr 1fr 0.5rem;
  grid-gap: 10px;
  margin-bottom: 1rem;
  @media (max-width: 767px) {
  }
`;

const ListLI = styled.li`
  margin-bottom: 0;
  @media (min-width: 768px) {
    display: inline-block;
  }
  @media (max-width: 767px) {
    display: block;
  }
`;

const ListLink = props => (
  <ListLI>
    <NavLink to={props.to}>{props.children}</NavLink>
  </ListLI>
);

const BrandLink = styled(Link)`
  text-decoration: none;
  color: #999900;
  font-weight: 400;
  grid-column: 2 / 3;
  @media (max-width: 767px) {
    font-size: 16px;
    display: block;
    padding: 0rem 0;
    line-height: 133%;
  }
`;
const NavDiv = styled.div`
  justify-self: end;
  grid-column: 3 / 4;
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
    font-size: 16px;
    display: block;
    padding: 0rem 0;
    line-height: 133%;
  }
`;

const Header = () => (
  <NavBar className="NavBar">
    <BrandLink className="BrandLink home" brand bold to="/">
      Dave&nbsp;Lindberg Marketing&nbsp;&&nbsp;Design
    </BrandLink>
    <NavDiv className="NavDiv">
      <ListLink to="/#marketing">Marketing</ListLink>
      <ListLink to="/#design">Design</ListLink>
      <ListLink to="/#contact">Contact</ListLink>
      <NavLink phone bold href="tel:603-727-2050">
        603.727.2050
      </NavLink>
    </NavDiv>
  </NavBar>
);

export default Header;
