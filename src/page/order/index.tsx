import React from 'react';
import { TemplateOrder } from 'src/components/templates/order';
import { Page } from 'src/components/templates/page';

export const OrderPage: React.FC = () => {
  return (
    <Page
      textHeader="受注登録"
      textIdHeader="ユーザーID"
      textNameHeader="ユーザー名"
      userIdHeader="0368"
      userNameHeader="テスト 太郎"
    >
      <TemplateOrder />
    </Page>
  );
};
