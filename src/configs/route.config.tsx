import React from 'react';
import { useRoutes } from 'react-router-dom';
import LoginPage from '../page/login/index';
import ErrorPage from '../page/error/index';
import { DashBoard } from 'src/page/dashboard';
import { OrderPage } from 'src/page/order';
import { OrderMenuPage } from 'src/page/order-menu';
import {
  URL_DASHBOARD,
  URL_LOGIN,
  URL_ORDER_REGISTER,
  URL_PRINT,
  URL_MASTER_REGISTER,
} from 'src/constants/constants';
import { OrderRegistrationPage } from 'src/page/order-registration';

const RouteConfig = () => {
  const routes = useRoutes([
    { path: URL_LOGIN, element: <LoginPage /> },
    { path: URL_DASHBOARD, element: <DashBoard /> },
    { path: URL_ORDER_REGISTER, element: <OrderPage /> },
    { path: URL_MASTER_REGISTER, element: <OrderRegistrationPage /> },
    { path: URL_PRINT, element: <OrderMenuPage /> },
    { path: '*', element: <ErrorPage /> },
  ]);
  return routes;
};

export default RouteConfig;
