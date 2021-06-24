import React from 'react';
import { SpecialInput, Search, Aside } from '../components';

export default function aside({
  searchTerms,
  handleRadio,
  handleChange,
  handleCheckbox,
  handleSubmit,
}) {
  const citysIpt = ['London', 'Amsterdam', 'New York', 'Berlin'];

  return (
    <Aside>
      <SpecialInput style={{ marginBottom: '32px' }}>
        <Search.Input
          id="fullTime"
          name="full_time"
          type="checkbox"
          onChange={(e) => handleCheckbox(e)}
        />
        <Search.Label htmlFor="fullTime" aria-describedby="label">
          Full Time
        </Search.Label>
      </SpecialInput>
      <Search fdirection="column" onSubmit={(e) => handleSubmit(e)}>
        <Search.Title>Location</Search.Title>
        <Search.Inner>
          <Search.Input
            name="location"
            type="text"
            placeholder="City, state, zip code or country"
            autoComplete="off"
            iconClass="las la-globe-europe"
            onChange={(e) => handleChange(e)}
          />
        </Search.Inner>
      </Search>
      {citysIpt.map((city) => (
        <SpecialInput key={city}>
          <Search.Input
            id={`${city}Ipt`}
            name="location"
            type="radio"
            value={`${city}`}
            readOnly
            checked={city === searchTerms.location}
            onClick={(e) => handleRadio(e)}
          />
          <Search.Label htmlFor={`${city}Ipt`} aria-describedby="label">
            {city}
          </Search.Label>
        </SpecialInput>
      ))}
    </Aside>
  );
}
