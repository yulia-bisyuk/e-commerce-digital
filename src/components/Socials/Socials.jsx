import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import {
  SocialsWrapper,
  SocialsTitle,
  SocialsList,
  SocialLink,
  SocialsItem,
} from './socials.styled';

const Socials = () => {
  return (
    <SocialsWrapper>
      <SocialsTitle>JOIN US</SocialsTitle>
      <SocialsList>
        <SocialsItem>
          <SocialLink
            href="https://www.instagram.com/"
            aria-label="Instagram"
            rel="noreferrer"
            target="_blank"
          >
            <BsInstagram
              style={{
                width: '20px',
                height: '20px',
                color: 'white',
              }}
            />
          </SocialLink>
        </SocialsItem>
        <SocialsItem>
          <SocialLink
            href="https://twitter.com/"
            aria-label="Twitter"
            rel="noreferrer"
            target="_blank"
          >
            <BsTwitter
              style={{
                width: '20px',
                height: '20px',
                color: 'white',
              }}
            />
          </SocialLink>
        </SocialsItem>
        <SocialsItem>
          <SocialLink
            href="https://www.facebook.com/"
            aria-label="Facebook"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebookF
              style={{
                width: '20px',
                height: '20px',
                color: 'white',
              }}
            />
          </SocialLink>
        </SocialsItem>
        <SocialsItem>
          <SocialLink
            href="https://www.linkedin.com/"
            aria-label="Linkedin"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedinIn
              style={{
                width: '20px',
                height: '20px',
                color: 'white',
              }}
            />
          </SocialLink>
        </SocialsItem>
      </SocialsList>
    </SocialsWrapper>
  );
};

export default Socials;
