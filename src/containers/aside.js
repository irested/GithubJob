import React from 'react';
import { SpecialInput, Search } from '../components';

export default function aside() {
  return (
    <div style={{ gridArea: 'aside' }}>
      <SpecialInput style={{ marginBottom: '32px' }}>
        <SpecialInput.Input iptName="Full Time" iptType="checkbox" />
        <SpecialInput.Title>Full Time</SpecialInput.Title>
      </SpecialInput>
      <Search.Title>Location</Search.Title>
      <Search fullWidth>
        <Search.Input
          name="searchByLocation"
          type="text"
          placeholder="City, state, zip code or country"
          iconClass="las la-globe-europe"
        />
      </Search>
      <SpecialInput>
        <SpecialInput.Input iptName="London" iptType="radio" />
        <SpecialInput.Title>London</SpecialInput.Title>
      </SpecialInput>
      <SpecialInput>
        <SpecialInput.Input iptName="Amsterdam" iptType="radio" />
        <SpecialInput.Title>Amsterdam</SpecialInput.Title>
      </SpecialInput>
      <SpecialInput>
        <SpecialInput.Input iptName="New York" iptType="radio" />
        <SpecialInput.Title>New York</SpecialInput.Title>
      </SpecialInput>
      <SpecialInput>
        <SpecialInput.Input iptName="Berlin" iptType="radio" />
        <SpecialInput.Title>Berlin</SpecialInput.Title>
      </SpecialInput>
    </div>
  );
}
