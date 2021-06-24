/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container } from './styles/aside';

export default function Aside({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
