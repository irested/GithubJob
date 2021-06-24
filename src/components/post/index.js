/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Title, Text } from './styles/post';

export default function Post({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Post.Title = function postTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Post.Text = function postText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
