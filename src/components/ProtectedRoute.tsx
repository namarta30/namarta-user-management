import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '../redux/reducer/authSlice';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  path:string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useSelector(selectAuth);
  
  if (!isAuthenticated) {
    return <Navigate to="/signIn" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
