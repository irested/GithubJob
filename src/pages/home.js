import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/header';

export default function home() {
  // useEffect hydrate data
  return (
    <Grid>
      <HeaderContainer />
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-areas:
    '. head .'
    '. aside .'
    '. main .';
  grid-auto-rows: min-content;
  grid-template-columns: minmax(0, 1fr) min(65ch, calc(100% - 10px)) minmax(0, 1fr);
  grid-column-gap: 5px;

  @media (min-width: 768px) {
    grid-template-areas:
      '. head head .'
      '. aside main .'
      '. aside main .';

    grid-template-columns:
      minmax(0, 1fr) minmax(231px, calc(504px - 120px)) minmax(537px, calc(936px - 120px))
      minmax(0, 1fr);
  }
`;
