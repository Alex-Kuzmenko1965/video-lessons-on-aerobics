import { NavLink } from 'react-router-dom';
import { UseAuth } from '../hooks/useAuth';
import cl from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = UseAuth();

  const navLinkClassName = ({ isActive }) => isActive ? cl.active : cl.nav__link;

  return (
    <nav className={cl.nav}>
      <NavLink className={navLinkClassName} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={navLinkClassName} to="/Contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;