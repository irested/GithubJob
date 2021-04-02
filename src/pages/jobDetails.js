import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/use-fetch';

export default function jobDetails() {
  const { id } = useParams();

  const job = useFetch(`https://jobs.github.com/positions/${id}.json`);

  return (
    <div>
      <p>{job.title}</p>
    </div>
  );
}
