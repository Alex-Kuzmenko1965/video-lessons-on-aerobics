import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

	const handleSubmit = (e) => {
	  e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
	}

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          <b>Username</b>
          <input type="text" name="name" />
        </label>
        <label>
          <b>Email</b>
          <input type="email" name="email"
          />
        </label>
        <label>
          <b>Password</b>
          <input type="password" name="password"
          />
        </label>
        <button type="submit">
          <b>Register</b>
        </button>
      </form>
    </div>
  );
};