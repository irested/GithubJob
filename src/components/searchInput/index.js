/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container, Input, Button, Inner, Title, Label } from './styles/seachInput';

export default function Search({ children, withBackground, fdirection, ...restProps }) {
  return (
    <Container withBackground={withBackground} fdirection={fdirection} {...restProps}>
      {children}
    </Container>
  );
}

Search.Inner = function SearchInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Search.Title = function SearchTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Search.Label = function SearchLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

Search.Input = function SearchInput({ iconClass, ...restProps }) {
  return (
    <>
      {iconClass && <i className={iconClass} />}
      <Input {...restProps} />
    </>
  );
};

Search.SubmitBtn = function SearchSubmitBtn({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
