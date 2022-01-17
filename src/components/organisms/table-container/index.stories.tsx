import React from 'react';
import { storiesOf } from '@storybook/react';
import { TableContainer } from './';

storiesOf('Components/Organisms/TableContainer', module)
  .add('normal', () => (
    <TableContainer textButton1="製作工場入力へ" textHeading="案件内訳">
      <></>
    </TableContainer>
  ))
  .add('two-button', () => (
    <TableContainer
      modifiers="two-button"
      textHeading="案件内訳入力"
      textButton1="案件内訳入力"
      textButton2="登録"
    >
      <></>
    </TableContainer>
  ));
