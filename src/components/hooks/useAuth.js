import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectCurrentUser,
  selectError,
} from '../../redux/auth/selectors';

export const UseAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isCurrentUser = useSelector(selectCurrentUser);
  const error = useSelector(selectError);
  return {
    user,
    isLoggedIn,
    isCurrentUser,
    error,
  };
};