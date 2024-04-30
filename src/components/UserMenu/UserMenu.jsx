import { UseAuth } from '../../components/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import cl from './UserMenu.module.css';

const UserMenu = () => {
  const { user } = UseAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={cl.user__menu__wrapper}>
      <p className={cl.user__name}>{user.email}</p>
      <button className={cl.logout__btn} type="button"  onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;