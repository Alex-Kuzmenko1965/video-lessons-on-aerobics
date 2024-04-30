import { UseAuth } from './components/hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isCurrentUser } = UseAuth();
  const shouldRedirect = !isLoggedIn && !isCurrentUser;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};