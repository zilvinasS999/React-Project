import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/myStore';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuthStore();

  return isLoggedIn ? children : <Navigate to='/auth' />;
};

export default ProtectedRoute;
