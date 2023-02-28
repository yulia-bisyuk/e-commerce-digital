import { CgMenuGridR } from 'react-icons/cg';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';
import Logo from 'components/Logo/Logo';
import {
  HeaderSection,
  HeaderContainer,
  CatalogLink,
  UserNav,
  AuthLink,
  CartLink,
} from './header.styled';
const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <Logo />
        <CatalogLink to="catalog">
          <CgMenuGridR style={{ marginRight: '8px' }} />
          Catalog
        </CatalogLink>
        <UserNav>
          <AuthLink>
            <AiOutlineUser
              style={{
                color: 'white',
                width: '24px',
                height: '24px',
              }}
            />
          </AuthLink>
          <CartLink>
            <BsCart style={{ color: 'white', width: '24px', height: '24px' }} />
          </CartLink>
        </UserNav>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;
