/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Logo } from './styles/header';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ ...restProps }) {
  return (
    <Logo {...restProps}>
      <span>Github</span> Jobs
    </Logo>
  );
};
