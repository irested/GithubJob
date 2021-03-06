/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  ${({ fdirection }) =>
    fdirection === 'column' ? 'flex-direction: column;' : 'flex-flow: row wrap;'}
  justify-content: center;
  max-width: 100%;
  ${({ withBackground }) =>
    withBackground
      ? 'background: url(/images/backgroundImg.png); padding: 42px 0;'
      : 'margin-bottom: 1.5rem; '}
  background-size: cover;
  border-radius: 8px;
  grid-area: head;
`;

export const Inner = styled.div`
  display: flex;
  flex-flow: wrap;
  ${({ fullWidth }) => (fullWidth ? 'flex: 1;' : 'flex: 0.8;')}
  align-items: center;
  min-height: 48px;
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
    ${({ fullWidth }) => (fullWidth ? 'flex: 1;' : 'flex: 0.65;')}
  }
`;

export const Title = styled.h3`
  font-family: Poppins;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #b9bdcf;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #334680;
  margin-left: 15px;
`;

export const Input = styled.input`
  ${({ type }) =>
    type === 'radio' || type === 'checkbox'
      ? `
  margin: 0;
  width: 18px;
  height: 18px;
  margin-left: 15px;
  border: 1px solid #b9bdcf;
  `
      : `
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
  `}
`;

export const SpecialInput = styled.input`
  margin: 0;
  width: 18px;
  height: 18px;
  margin-left: 15px;
  border: 1px solid #b9bdcf;
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

  @media(max-width: 359px){
    max-width: 100%;
    flex: 1;
  }
}


`;
