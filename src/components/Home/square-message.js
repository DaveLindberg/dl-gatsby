import styled from 'styled-components';

const SquareMessage = styled.div`
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
  padding: 0 1rem;
  text-shadow: 0px 0px 4px #000;
  @media (max-width: 767px) {
    font-size: 1em;
    line-height: 1.2em;
  }
  .intro {
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    font-style: normal;
  }
`;

export default SquareMessage;
