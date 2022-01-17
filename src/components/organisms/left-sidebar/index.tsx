import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from 'src/assets/images/logo.png';
import { Button } from 'src/components/atoms/button';
import { Text } from 'src/components/atoms/text';
import { ButtonContainer } from 'src/components/molecules/button-container';
import {
  URL_DASHBOARD,
  URL_ORDER_REGISTER,
  URL_PRINT,
  URL_MASTER_REGISTER,
  TITLE_SYSTEM,
  HEADER_DASHBOARD,
  HEADER_ORDER_REGISTER,
  HEADER_PRINT,
  HEADER_MASTER_REGISTER,
} from 'src/constants/constants';

export const LeftSidebar: React.FC = () => {
  const history = useNavigate();

  const handleClick = (type: string) => {
    let url: string;
    switch (type) {
      case 'dashboard':
        url = URL_DASHBOARD;
        break;
      case 'order-register':
        url = URL_ORDER_REGISTER;
        break;
      case 'print':
        url = URL_PRINT;
        break;
      case 'master-register':
        url = URL_MASTER_REGISTER;
        break;
      default:
        url = '';
    }
    history(url);
  };

  return (
    <div className="o-left-sidebar">
      <div className="o-left-sidebar__logo">
        <img src={logo} alt="kitsutaka" />
      </div>
      <div className="o-left-sidebar__title">
        <Text modifiers="green">{TITLE_SYSTEM}</Text>
      </div>
      <div className="o-left-sidebar__button">
        <ButtonContainer>
          <Button onClickRequest={() => handleClick('dashboard')}>{HEADER_DASHBOARD}</Button>
          <Button onClickRequest={() => handleClick('order-register')}>{HEADER_ORDER_REGISTER}</Button>
          <Button onClickRequest={() => handleClick('print')}>{HEADER_PRINT}</Button>
          <Button onClickRequest={() => handleClick('master-register')}>{HEADER_MASTER_REGISTER}</Button>
        </ButtonContainer>
      </div>
    </div>
  );
};
