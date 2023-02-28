import Logo from 'components/Logo/Logo';
import Socials from 'components/Socials/Socials';
import {
  FooterSection,
  FooterContainer,
  FooterLogoWrapper,
  Address,
  ContactTitle,
  Contacts,
  Contact,
} from './footer.styled';

const Footer = () => {
  return (
    <FooterSection>
      <FooterLogoWrapper>
        <Logo />
      </FooterLogoWrapper>
      <FooterContainer>
        <div>
          <ContactTitle>CONTACT US</ContactTitle>
          <Contacts>
            <Address>Kyiv, Dorohozhytska str.</Address>
            <Contact>digi@example.com</Contact>
            <Contact>+380 96 11 11 111</Contact>
          </Contacts>
        </div>
        <Socials />
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
