import styled from 'styled-components';

const SocialsWrapper = styled.div`
  color: white;
`;

const SocialsTitle = styled.h3`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.03em;
  text-align: center;

  color: #fff;
`;

const SocialsList = styled.ul`
  display: flex;
  justify-content: center;
`;

const SocialsItem = styled.li`
  margin-right: 8px;
`;

const SocialLink = styled.a`
  display: flex;

  padding: 12px;
  border-radius: 50%;
  background-color: ${props => props.theme.secondaryDarkGrey};
`;

export { SocialsWrapper, SocialsTitle, SocialsList, SocialLink, SocialsItem };
