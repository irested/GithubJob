/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container, Input, Label } from './styles/specialInput';

export default function SpecialInput({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SpecialInput.Input = function SpecialInputInput({ iptName, iptType, ...restProps }) {
  return <Input name={iptName} type={iptType} {...restProps} />;
};

SpecialInput.Label = function SpecialInputLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};
