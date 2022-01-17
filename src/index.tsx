import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { AuthedRoute } from './libs/authed-route';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashBoard } from './page/dashboard';
import { OrderMenuPage } from './page/order-menu';
import { OrderPage } from './page/order';
import { OrderRegistrationPage } from './page/order-registration';
import { FactoryPage } from './page/factory';
import { Provider } from 'react-redux';
import LoginPage from './page/login';
import {
  URL_DASHBOARD,
  URL_FACTORY,
  URL_LOGIN,
  URL_MASTER_REGISTER,
  URL_ORDER_REGISTER,
  URL_PRINT,
} from './constants/constants';
import './configs/firebase.config';
import './styles/index.scss';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path={URL_LOGIN} element={<LoginPage />} />
        <Route
          path={URL_DASHBOARD}
          element={
            <AuthedRoute>
              <DashBoard />
            </AuthedRoute>
          }
        />
        <Route
          path={URL_ORDER_REGISTER}
          element={
            <AuthedRoute>
              <OrderPage />
            </AuthedRoute>
          }
        />

        <Route
          path={URL_PRINT}
          element={
            <AuthedRoute>
              <OrderMenuPage />
            </AuthedRoute>
          }
        />
        <Route
          path={URL_MASTER_REGISTER}
          element={
            <AuthedRoute>
              <OrderRegistrationPage />
            </AuthedRoute>
          }
        />
        <Route
          path={URL_FACTORY}
          element={
            <AuthedRoute>
              <FactoryPage />
            </AuthedRoute>
          }
        />
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
