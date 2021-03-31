/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Card } from '../components';
// import { Card } from '../components';

export default function Jobs(jobs) {
  const [loading, setLoading] = useState(false);
  const { data } = jobs;

  useEffect(() => {
    return data.length === 0 ? setLoading(true) : setLoading(false);
  }, [data]);

  if (!loading) {
    return (
      <Card style={{ gridArea: 'main' }}>
        {data.map((post) => {
          return (
            <Card.Entities key={post.id}>
              <Card.LogoDiv>
                <Card.Logo src={post.company_logo} />
              </Card.LogoDiv>
              <Card.JobInfos>
                <Card.CompanyName>{post.company}</Card.CompanyName>
                <Card.Title>{post.title}</Card.Title>
                <Card.Meta>
                  {post.type === 'Full Time' ? <Card.FullTime /> : null}
                  <div
                    style={{
                      display: 'flex',
                      flexFlow: 'row wrap',
                      alignItems: 'flex-end',
                    }}
                  >
                    <Card.City>{post.location}</Card.City>
                    <Card.TimePosted>{post.created_at}</Card.TimePosted>
                  </div>
                </Card.Meta>
              </Card.JobInfos>
            </Card.Entities>
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
