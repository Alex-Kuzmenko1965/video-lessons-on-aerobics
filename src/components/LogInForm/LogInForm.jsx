import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';


export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const userData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(logIn(userData));
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleLogin}>
        <label>
          <b>Email</b>
          <input type="email" name="email" />
        </label>
        <label>
          <b>Password</b>
          <input type="password" name="password"
          />
        </label>
        <button type="submit">
          <b>Log In</b>
        </button>
      </form>
    </div>
  );
};