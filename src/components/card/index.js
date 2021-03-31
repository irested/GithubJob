/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Container,
  LogoDiv,
  Logo,
  CompanyName,
  Title,
  FullTime,
  City,
  TimePosted,
  Entities,
  Meta,
  JobInfos,
} from './styles/card';

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

// Img, Company Name, Title, Full Time , City, Time posted

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.JobInfos = function CardJobInfos({ children, ...restProps }) {
  return <JobInfos {...restProps}>{children}</JobInfos>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Logo = function CardLogo({ src, ...restProps }) {
  return <Logo src={src} {...restProps} />;
};

Card.LogoDiv = function CardLogoDiv({ children, ...restProps }) {
  return <LogoDiv {...restProps}>{children}</LogoDiv>;
};

Card.CompanyName = function CardCompanyName({ children, ...restProps }) {
  return <CompanyName {...restProps}>{children}</CompanyName>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.FullTime = function CardFullTime({ ...restProps }) {
  return <FullTime {...restProps}>Full Time</FullTime>;
};

Card.City = function CardCity({ children, ...restProps }) {
  return (
    <City {...restProps}>
      <i className="las la-globe" />
      <p>{children}</p>
    </City>
  );
};

Card.TimePosted = function CardTimePosted({ children, ...restProps }) {
  return (
    <TimePosted {...restProps}>
      <i className="lar la-clock" />
      <p>{children}</p>
    </TimePosted>
  );
};
