/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../hooks/use-fetch';
import { Header, Post, Aside } from '../components';
import { Grid } from './home';

export default function jobDetails() {
  const history = useHistory();
  const { id } = useParams();
  const job = useFetch(`https://jobs.github.com/positions/${id}.json`);
  return (
    <Grid>
      <Header style={{ gridArea: 'head' }}>
        <Header.Logo />
      </Header>
      <Aside>
        <p onClick={() => history.goBack()}>goBack</p>
      </Aside>
      <Post>
        <Post.Title>{job.title}</Post.Title>
        <Post.Text dangerouslySetInnerHTML={{ __html: job.description }} />
      </Post>
    </Grid>
  );
}

// 48b11b3b-2bc1-4027-93f6-2d8813c2d216
