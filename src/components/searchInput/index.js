/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container, Input, Button, Inner, Title } from './styles/seachInput';

export default function search({ children, withBackground, fullWidth, iconClass, ...restProps }) {
  return (
    <Container withBackground={withBackground} className="pt-1" {...restProps}>
      <Inner fullWidth={fullWidth}>{children}</Inner>
    </Container>
  );
}

search.Title = function searchTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

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
