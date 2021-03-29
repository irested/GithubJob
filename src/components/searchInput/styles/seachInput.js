/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  max-width: 100%;
  padding: 42px 0;
  ${(props) => props.withBackground && 'background: url(/images/backgroundImg.png)'};
  background-size: cover;
  border-radius: 8px;
  grid-area: head;
`;

export const Inner = styled.div`
  display: flex;
  flex-flow: wrap;
  flex: 0.8;
  align-items: center;
  padding: 3px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  i {
    font-size: 1.25rem;
    color: #b9bdcf;
    margin-left: 13px;
  }

  @media (min-width: 768px) {
    flex: 0.65;
  }
`;

export const Input = styled.input`
  flex: 1;
  min-width: 100px;
  padding: 7px;
  font-size: 14px;
  border: none;

  &::placeholder {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  max-width: 146px;
  background: #1e86ff;
  border-radius: 4px;
  padding: 1rem 2.5rem;
  border-radius: 4px;;
  text-decoration: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 16px;

  @media(max-width: 346px){
    max-width: 100%;
    flex: 1;
  }
}


`;
