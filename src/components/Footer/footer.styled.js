import styled from 'styled-components';
import { Container } from 'common-styles/common.styled';

const FooterSection = styled.footer`
  margin-top: 30px;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: ${props => props.theme.primaryDarkGrey};
`;

const FooterContainer = styled(Container)`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
  }
`;

const FooterLogoWrapper = styled.div`
  width: fit-content;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
`;

const Address = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.71;
  color: white;
`;

const Contact = styled.p`
  margin-bottom: 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.71;
  color: ${props => props.theme.lightGrey};
`;

const ContactTitle = styled.h3`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.03em;
  text-align: center;

  color: #fff;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

export {
  FooterSection,
  FooterContainer,
  FooterLogoWrapper,
  Address,
  ContactTitle,
  Contacts,
  Contact,
};
