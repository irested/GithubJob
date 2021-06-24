/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Spinner } from '../components';

export default function Jobs({ jobs, loading }) {
  if (!loading) {
    return (
      <Card style={{ gridArea: 'main' }}>
        {jobs.map((job) => {
          return (
            <Link to={`/details/${job.id}`} key={job.id}>
              <Card.Entities>
                <Card.LogoDiv>
                  <Card.Logo src={job.company_logo} />
                </Card.LogoDiv>
                <Card.JobInfos>
                  <Card.CompanyName>{job.company}</Card.CompanyName>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Meta>
                    {job.type === 'Full Time' ? <Card.FullTime /> : null}
                    <div
                      style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        alignItems: 'flex-end',
                      }}
                    >
                      <Card.City>{job.location}</Card.City>
                      <Card.TimePosted>{job.created_at}</Card.TimePosted>
                    </div>
                  </Card.Meta>
                </Card.JobInfos>
              </Card.Entities>
            </Link>
          );
        })}
      </Card>
    );
  }
  return <Spinner />;
}
