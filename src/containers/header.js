import React from 'react';
import { Header, Search } from '../components';

export default function headerContainer() {
  return (
    <Header>
      <Header.Logo />
      <Search withBackground>
        <Search.Input
          name="searchByDescription"
          type="text"
          placeholder="Title, compagnies, expertise"
          iconClass="las la-suitcase"
        />
        <Search.SubmitBtn>Search</Search.SubmitBtn>
      </Search>
    </Header>
  );
}
