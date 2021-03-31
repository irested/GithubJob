/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  margin: 0;
  width: 18px;
  height: 18px;
  margin-left: 15px;
  ${(props) =>
    props.iptType === 'radio' &&
    `
      border: 1px solid #B9BDCF;
      border-radius: 59px;
      `}
  ${(props) =>
    props.iptType === 'checkbox' &&
    `
    border: 1px solid #B9BDCF;
    border-radius: 2px;
    `}
`;

export const Title = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #334680;
  margin-left: 15px;
`;
