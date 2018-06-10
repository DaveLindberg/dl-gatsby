import styled from 'styled-components';

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
      font-size: 1.5em;
    }
  }
  h1 {
    font-size: 4em;
    color: #cc9900;
    @media (max-width: 767px) {
      font-size: 2em;
    }
  }
`;

export default Headline;
