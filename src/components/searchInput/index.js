/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container, Input, Button, Inner } from './styles/seachInput';

export default function search({ children, withBackground, iconClass, ...restProps }) {
  return (
    <Container withBackground {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

search.Input = function searchInput({ iconClass, searchTerm, setSearchTerm, ...restProps }) {
  return (
    <>
      {iconClass && <i className={iconClass} />}
      <Input {...restProps} />
    </>
  );
};

search.SubmitBtn = function searchSubmitBtn({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
