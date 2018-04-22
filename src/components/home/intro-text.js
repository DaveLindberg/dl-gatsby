import styled from 'styled-components';

const Introtext = styled.div`
  grid-column: 1 / 4;
  grid-row: 6 / 6;
  margin-top: 1.5em;
  display: grid;
  grid-template-columns: minmax(10%, 20%) minmax(40%, 70%) minmax(10%, 20%);
  p {
    grid-column: 2 / 2;
  }
  h2 {
    font-size: 3em;
    color: #cc9900;
    grid-column: 2 / 2;
    margin: 1.5em 0 0em 0;
    text-align: center;
  }
  @media (max-width: 767px) {
    grid-column: 1 / 3;
    grid-row: 8 / 8;
  }
`;

export default Introtext;
