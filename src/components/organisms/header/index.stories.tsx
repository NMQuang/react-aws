import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from './';

storiesOf('Components/Organisms/Header', module).add('normal', () => (
  <Header textId="ユーザーID" textName="ユーザー名" userId="0368" userName="テスト 太郎">
    受注登録
  </Header>
));
