import { UseAuth } from '../../components/hooks/useAuth';
import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import Authorization from 'components/Authorization/Authorization';
import cl from './Header.module.css';


const Header = () => {
  const { isLoggedIn } = UseAuth();

  return (
    <header className={cl.header}>
      <Container>
        <div className={cl.header__wrapper}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <Authorization />}
        </div>
      </Container>
    </header>
  );
};

export default Header;