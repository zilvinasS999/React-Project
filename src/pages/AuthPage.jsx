import React, { useRef } from 'react';
import { useStore, useAuthStore } from '../store/myStore';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const loginUsernameRef = useRef();
  const loginPasswordRef = useRef();
  const registerUsernameRef = useRef();
  const registerPasswordRef = useRef();
  const registerPasswordConfirmRef = useRef();
  const navigate = useNavigate();

  const { registerUser, users } = useStore();
  const { logIn } = useAuthStore();

  const handleRegister = (event) => {
    event.preventDefault();
    const username = registerUsernameRef.current.value;
    const password = registerPasswordRef.current.value;
    const passwordConfirm = registerPasswordConfirmRef.current.value;

    if (password !== passwordConfirm) {
      alert("Passwords don't match.");
      return;
    }
    if (!/\d/.test(password)) {
      alert('Password must include at least one numeric value.');
      return;
    }
    if (username.length < 4 || username.length > 20) {
      alert('Username must be between 4 and 20 characters');
      return;
    }
    if (password.length < 4 || password.length > 20) {
      alert('Password must be between 4 and 20 characters');
      return;
    }
    if (users.some((user) => user.username === username)) {
      alert('Username already exists.');
      return;
    }
    registerUser({ username, password });
    alert('Account has been created');
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const username = loginUsernameRef.current.value;
    const password = loginPasswordRef.current.value;

    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      logIn();
      navigate('/');
    } else {
      alert('Invalid account');
    }
  };

  return (
    <div className='auth-page'>
      <div className='forms'>
        <div className='login-form'>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              ref={loginUsernameRef}
              type='text'
              placeholder='Username'
              required
            />
            <input
              ref={loginPasswordRef}
              type='password'
              placeholder='Password'
              required
            />
            <button type='submit'>Login</button>
          </form>
        </div>
        <div className='register-form'>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input
              ref={registerUsernameRef}
              type='text'
              placeholder='Username'
              required
            />
            <input
              ref={registerPasswordRef}
              type='password'
              placeholder='Password'
              required
            />
            <input
              ref={registerPasswordConfirmRef}
              type='password'
              placeholder='Confirm Password'
              required
            />
            <button type='submit'>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
