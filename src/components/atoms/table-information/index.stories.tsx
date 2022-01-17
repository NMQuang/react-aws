import React from 'react';
import { storiesOf } from '@storybook/react';
import { TableInfomation } from './';

storiesOf('Components/Atoms/TableInfomation', module).add('normal', () => (
  <TableInfomation
    textId="ユーザーID"
    textName="ユーザー名"
    userId="0368"
    userName="テスト 太郎"
  ></TableInfomation>
));
