import { CgDigitalocean } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { LogoWrapper, LogoText } from './logo.styled';

const Logo = () => {
  return (
    <Link to="/">
      <LogoWrapper>
        <CgDigitalocean
          style={{
            color: 'white',
            width: '20px',
            height: '20px',
            marginRight: '8px',
          }}
        />
        <LogoText>DIGI</LogoText>
      </LogoWrapper>
    </Link>
  );
};

export default Logo;
