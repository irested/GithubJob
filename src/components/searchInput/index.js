/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container, Input, Button, Inner, Title } from './styles/seachInput';

export default function Search({ children, withBackground, fullWidth, iconClass, ...restProps }) {
  return (
    <Container withBackground={withBackground} {...restProps}>
      <Inner fullWidth={fullWidth}>{children}</Inner>
    </Container>
  );
}

Search.Title = function SearchTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Search.Input = function SearchInput({ iconClass, searchTerm, setSearchTerm, ...restProps }) {
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
