import React from 'react';
import { Footer } from 'src/components/organisms/footer';
import { Header } from 'src/components/organisms/header';
import { LeftSidebar } from 'src/components/organisms/left-sidebar';
import { mapModifiers } from 'src/libs/component';

export interface PageProps {
  children?: React.ReactNode;
  modifiers?: 'main-no-margin';
  textHeader: string;
  textIdHeader: string;
  textNameHeader: string;
  userIdHeader: string;
  userNameHeader: string;
}

export const Page: React.FC<PageProps> = props => (
  <div className={mapModifiers('t-page', props.modifiers)}>
    <div className="t-page__wrapper">
      <LeftSidebar />
      <div className="t-page__content">
        <Header
          textId={props.textIdHeader}
          textName={props.textNameHeader}
          userId={props.userIdHeader}
          userName={props.userNameHeader}
        >
          {props.textHeader}
        </Header>
        <main className="t-page__main">{props.children}</main>
      </div>
    </div>
    <Footer>©2021 Kitsutaka Co.,Ltd.</Footer>
  </div>
);
