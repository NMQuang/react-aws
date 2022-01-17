import React from 'react';
import { Navigate, RouteProps, useLocation } from 'react-router-dom';
import { loadFromLocalStorage } from 'src/libs/utils';
import { URL_LOGIN } from 'src/constants/constants';

interface AuthedRouteProps extends RouteProps {
  children: React.ReactNode;
}

export const AuthedRoute: React.FC<AuthedRouteProps> = ({ children }) => {
  const auth = loadFromLocalStorage('auth');
  const location = useLocation();

  if (!auth) {
    return <Navigate to={URL_LOGIN} state={{ from: location }} />;
  }

  return <>{children}</>;
};
