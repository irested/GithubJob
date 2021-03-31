import styled from 'styled-components';
// Img, Company Name, Title, Full Time , City, Time posted

export const Entities = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 2rem;
  padding: 12px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JobInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 1rem;
  width: 100%;
`;

export const LogoDiv = styled.div`
  min-width: 6rem;
  max-width: 6rem;
  height: 5.625rem;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: contain;
  object-position: center;
`;

export const CompanyName = styled.h4`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #334680;
  margin-bottom: 0.3rem;
`;

export const Title = styled.h3`
  font-size: 18px;
  line-height: 21px;
  color: #334680;
  margin-bottom: 0.75rem;
`;

export const FullTime = styled.p`
  align-self: flex-start;
  font-weight: 700;
  font-size: 12px;
  color: #334680;
  padding: 6px 8px;
  border: 1px solid #334680;
  box-sizing: border-box;
  border-radius: 4px;
`;

export const City = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  i {
    font-size: 1rem;
    margin-right: 5px;
  }
`;

export const TimePosted = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-left: 15px;

  i {
    font-size: 1rem;
    margin-right: 5px;
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #b9bdcf;
`;
