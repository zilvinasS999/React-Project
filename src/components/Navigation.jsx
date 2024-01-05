import React from 'react';
import { useAuthStore } from '../store/myStore';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const { isLoggedIn, logOut } = useAuthStore();

  const handleLogout = () => {
    logOut();
  };

  return (
    <nav className='navigation'>
      <Link className='nav-link' to='/'>
        Home
      </Link>
      <Link className='nav-link' to='/profile'>
        Profile
      </Link>
      <Link className='nav-link' to='/createpost'>
        Create Post
      </Link>

      {isLoggedIn ? (
        <button className='nav-button' onClick={handleLogout}>
          Log Out
        </button>
      ) : (
        <Link className='nav-link' to='/auth'>
          Log In
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
