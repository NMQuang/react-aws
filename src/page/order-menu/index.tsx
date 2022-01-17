import React from 'react';
import { Form } from 'src/components/templates/form';
import { Page } from 'src/components/templates/page';
import { HEADER_PRINT } from 'src/constants/constants';

export const OrderMenuPage: React.FC = () => {
  return (
    <Page
      modifiers="main-no-margin"
      textHeader={HEADER_PRINT}
      textIdHeader="ユーザーID"
      textNameHeader="ユーザー名"
      userIdHeader="0368"
      userNameHeader="テスト 太郎"
    >
      <Form />
    </Page>
  );
};
