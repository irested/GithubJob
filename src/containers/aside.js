import React from 'react';
import { SpecialInput, Search } from '../components';

export default function aside() {
  return (
    <div style={{ gridArea: 'aside' }}>
      <SpecialInput iptName="Full Time" iptType="checkbox" />
      <Search.Title>Location</Search.Title>
      <Search fullWidth>
        <Search.Input
          name="searchByLocation"
          type="text"
          placeholder="City, state, zip code or country"
          iconClass="las la-globe-europe"
        />
      </Search>
      <SpecialInput iptName="London" iptType="radio" />
      <SpecialInput iptName="Amsterdam" iptType="radio" />
      <SpecialInput iptName="New York" iptType="radio" />
      <SpecialInput iptName="Berlin" iptType="radio" />
    </div>
  );
}
