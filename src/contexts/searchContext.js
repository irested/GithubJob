/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { createContext, useState } from 'react';

export const JobsContext = createContext();

const JobsProvider = ({ children }) => {
  const [searchData, setSearchData] = useState([]);
  const [searchTerms, setSearchTerms] = useState({
    location: 'Amsterdam',
    full_time: false,
  });
  const searchTermsQuery = new URLSearchParams(searchTerms).toString();

  return (
    <JobsContext.Provider
      value={{ searchData, setSearchData, searchTerms, setSearchTerms, searchTermsQuery }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export default JobsProvider;
