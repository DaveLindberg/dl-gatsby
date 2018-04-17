import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const NavLink = styled.a`
  text-decoration: none;
  color: ${props => (props.brand ? '#CC9900' : '#999900')};
  padding: 0 .75rem;
  white-space: ${props => (props.phone ? 'nowrap' : 'normal')};
  font-weight: ${props => (props.bold ? 400 : 300)};
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 18px;
    display: block;
    padding: 0rem 0;
    line-height: 133%;
  }
  :hover {
    color: #CC9900;
  }
}
`;
const NavDiv = styled.div`
  justify-self: end;
`;

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: #fff;
  padding: 1rem 2rem 2rem;
`;

const ListLink = props => (
  <li
    style={{
      display: 'inline-block',
      marginRight: '1rem'
    }}
  >
    <Link
      to={props.to}
      style={{
        textDecoration: 'none',
        color: '#CC9900'
      }}
    >
      {props.children}
    </Link>
  </li>
);

const Header = () => (
  <NavBar>
    <ListLink brand bold to="/" className="home">
      Dave&nbsp;Lindberg Marketing&nbsp;&&nbsp;Design
    </ListLink>
    <NavDiv className="NavDiv">
      <ListLink to="/#marketing">Marketing</ListLink>
      <ListLink to="/#design">Design</ListLink>
      <ListLink to="/#contact">Contact</ListLink>
      <NavLink phone bold href="tel:802-282-3368">
        802 282-3368
      </NavLink>
    </NavDiv>
  </NavBar>
);

export default Header;
