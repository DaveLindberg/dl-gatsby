import styled from 'styled-components';

const LinkButton = styled.a`
  display: block;
  color: #ffffff !important;
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

export default LinkButton;
