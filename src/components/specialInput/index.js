/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container, Input } from './styles/specialInput';

export default function specialInput({ iptName, iptType, ...restProps }) {
  return (
    <Container>
      <Input name={iptName} type={iptType} {...restProps} />
      <p>{iptName}</p>
    </Container>
  );
}
