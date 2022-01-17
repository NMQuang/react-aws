import React from 'react';
import { Factory } from 'src/components/templates/factory';
import { Page } from 'src/components/templates/page';

export const FactoryPage: React.FC = () => {
  return (
    <Page
      textHeader="受注登録"
      textIdHeader="ユーザーID"
      textNameHeader="ユーザー名"
      userIdHeader="0368"
      userNameHeader="テスト 太郎"
    >
      <Factory />
    </Page>
  );
};
