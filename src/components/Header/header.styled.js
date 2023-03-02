import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from 'common-styles/common.styled';

const HeaderSection = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: ${props => props.theme.primaryDarkGrey};

  @media screen and (min-width: 768px) {
    padding-top: 24px;
    /* padding-bottom: 24px; */
  }
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: space-evenly;
  }
`;

const UserNav = styled.div`
  display: flex;
`;

const AuthLink = styled(Link)`
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }
`;

const CartLink = styled(Link)``;

const CatalogLink = styled(Link)`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  background-color: ${props => props.theme.primaryRed};
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.32px;

  @media screen and (min-width: 768px) {
    padding: 12px 22px;
    font-size: 18px;
  }
`;

export {
  HeaderSection,
  HeaderContainer,
  CatalogLink,
  AuthLink,
  CartLink,
  UserNav,
};
