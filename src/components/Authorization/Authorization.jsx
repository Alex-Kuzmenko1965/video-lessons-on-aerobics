import { NavLink } from 'react-router-dom';
import cl from './Authorization.module.css';

const Authorization = () => {
  const navLinkClassName = ({ isActive }) => isActive ? cl.active : cl.nav__link;

  return (
    <nav className={cl.nav}>
      <NavLink className={navLinkClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={navLinkClassName} to="/login">
        Log In
      </NavLink>
    </nav>
  );
};

export default Authorization;