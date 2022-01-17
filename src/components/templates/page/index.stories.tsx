import React from 'react';
import { storiesOf } from '@storybook/react';
import { Page } from './';

storiesOf('Components/Templates/Page', module).add('normal', () => (
  <Page
    textHeader="受注登録"
    textIdHeader="ユーザーID"
    textNameHeader="ユーザー名"
    userIdHeader="0368"
    userNameHeader="テスト 太郎"
  ></Page>
));
