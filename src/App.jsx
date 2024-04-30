import { useEffect } from 'react';
// import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { UseAuth } from './components/hooks/useAuth';
import { fetchCurrentUser } from './redux/auth/operations';
import { PrivateRoute } from 'PrivateRoute';
import { RestrictedRoute } from 'RestrictedRoute';
import SharedLayout from './components/SharedLayout/SharedLayout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Contacts from './pages/Contacts';

// const Home = lazy(() => import('./pages/Home'));
// const Register = lazy(() => import('./pages/Register'));
// const Login = lazy(() => import('./pages/Login'));
// const Contacts = lazy(() => import('./pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const { isCurrentUser } = UseAuth;

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  
  return isCurrentUser ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            // Обмежений маршрут на /contacts
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            // Обмежений маршрут на /contacts
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            // Обмежений маршрут на /login
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}