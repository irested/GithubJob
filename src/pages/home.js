/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Header, Aside, Jobs } from '../containers';
import { JobsContext } from '../contexts/searchContext';

export default function home() {
  const { searchData, setSearchData } = useContext(JobsContext);
  const { searchTerms, setSearchTerms } = useContext(JobsContext);
  const { searchTermsQuery } = useContext(JobsContext);
  const [searchValue, setSearchValue] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSearchValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckbox = (e) => {
    setSearchValue((prev) => ({ ...prev, [e.target.name]: !searchTerms.full_time }));
    setSearchTerms((prev) => ({ ...prev, [e.target.name]: !searchTerms.full_time }));
  };

  const handleRadio = (e) => {
    setSearchValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setSearchTerms((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerms(searchValue);
  };

  useEffect(async () => {
    const corsApi = 'https://cors-anywhere-venky.herokuapp.com/';
    const url = `https://jobs.github.com/positions.json?${searchTermsQuery}`;
    const response = await fetch(`${corsApi}${url}`).then(setLoading(true));
    const json = await response.json().then(setLoading(false));
    setSearchData(json);
    setSearchValue(searchTerms);
  }, [searchTerms]);

  return (
    <Grid>
      <Header handleSubmit={handleSubmit} handleChange={handleChange} value={searchValue} />
      <Aside
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleCheckbox={handleCheckbox}
        handleRadio={handleRadio}
        searchTerms={searchTerms}
        setSearchTerms={setSearchTerms}
        value={searchValue}
      />
      <Jobs jobs={searchData} loading={loading} />
    </Grid>
  );
}

export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-areas:
    '. head .'
    '. aside .'
    '. main .';
  grid-auto-rows: min-content;
  grid-template-columns: minmax(0, 1fr) min(65ch, calc(100% - 24px)) minmax(0, 1fr);
  grid-column-gap: 12px;

  @media (min-width: 768px) {
    grid-template-areas:
      '. head head .'
      '. aside main .';
    grid-template-columns:
      minmax(0, 1fr) minmax(calc(231px - 15px), calc(504px - 120px)) minmax(
        calc(537px - 15px),
        calc(936px - 120px)
      )
      minmax(0, 1fr);
  }
`;
