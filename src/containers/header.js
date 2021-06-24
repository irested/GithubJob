/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Header, Search } from '../components';

export default function headerContainer({ handleSubmit, handleChange }) {
  return (
    <Header>
      <Header.Logo />
      <Search withBackground onSubmit={(e) => handleSubmit(e)}>
        <Search.Inner>
          <Search.Input
            name="description"
            type="text"
            placeholder="Title, compagnies, expertise"
            autoComplete="off"
            iconClass="las la-suitcase"
            onChange={(e) => handleChange(e)}
          />
          <Search.SubmitBtn>Search</Search.SubmitBtn>
        </Search.Inner>
      </Search>
    </Header>
  );
}
