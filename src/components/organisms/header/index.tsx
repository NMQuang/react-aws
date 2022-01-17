import React from 'react';
import { Icon } from 'src/components/atoms/icon';
import { PageHeading } from 'src/components/atoms/page-heading';
import { TableInfomation } from 'src/components/atoms/table-information';

export interface HeaderProps {
  children: React.ReactNode;
  textId: string;
  textName: string;
  userId: string;
  userName: string;
}

export const Header: React.FC<HeaderProps> = props => (
  <header className="o-header">
    <div className="o-header__page-header">
      <PageHeading>{props.children}</PageHeading>
    </div>
    <div className="o-header__information">
      <TableInfomation
        textId={props.textId}
        textName={props.textName}
        userId={props.userId}
        userName={props.userName}
      />
    </div>
    <div className="o-header__icons">
      <span className="o-header__icon-notification">
        <Icon name="notification-bell"></Icon>
      </span>
      <span className="o-header__icon-setting">
        <Icon name="setting"></Icon>
      </span>
    </div>
  </header>
);
