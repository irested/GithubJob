import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const corsApi = 'https://cors-anywhere-venky.herokuapp.com/';
  const [data, setData] = useState([]);
  async function fetchUrl() {
    const response = await fetch(`${corsApi}${url}`);
    const json = await response.json();
    setData(json);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return data;
}
