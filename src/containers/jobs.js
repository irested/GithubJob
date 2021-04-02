/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components';
// import { Card } from '../components';

export default function Jobs(props) {
  const [loading, setLoading] = useState(false);
  const { jobs } = props;

  useEffect(() => {
    return jobs.length === 0 ? setLoading(true) : setLoading(false);
  }, [jobs]);

  if (!loading) {
    return (
      <Card style={{ gridArea: 'main' }}>
        {jobs.map((job) => {
          return (
            <Link to={`/details/${job.id}`}>
              <Card.Entities Link key={job.id}>
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
  return <p>Loading...</p>;

  /* <Card style={{ gridArea: 'main' }}>
      <Card.Logo
        src="https://brandslogos.com/wp-content/uploads/images/large/renault-logo.png"
        alt="Renault Logo"
      />
      <Card.CompanyName>Renault</Card.CompanyName>
      <Card.Title>Front End Developper</Card.Title>
      <Card.FullTime />
      <Card.City>Paris</Card.City>
      <Card.TimePosted>5 days ago</Card.TimePosted>
    </Card> */
}
