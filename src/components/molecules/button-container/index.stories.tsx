import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonContainer } from './';
import { Button } from 'src/components/atoms/button';

storiesOf('Components/Molecules/ButtonContainer', module)
  .add('normal', () => (
    <ButtonContainer>
      <Button>ダッシュボード</Button>
      <Button>受注登録</Button>
      <Button>帳票印刷</Button>
      <Button>各種マスタ登録</Button>
    </ButtonContainer>
  ))

  .add('container-button-green', () => (
    <ButtonContainer modifiers="button-green">
      <Button bgColor="green">ダッシュボード</Button>
      <Button bgColor="green">受注登録</Button>
      <Button bgColor="green">帳票印刷</Button>
      <Button bgColor="green">各種マスタ登録</Button>
      <Button bgColor="green">ダッシュボード</Button>
      <Button bgColor="green">受注登録</Button>
      <Button bgColor="green">帳票印刷</Button>
      <Button bgColor="green">各種マスタ登録</Button>
    </ButtonContainer>
  ))

  .add('rounded-container', () => (
    <ButtonContainer modifiers="rounded-container">
      <Button modifiers="big-rounded">新規</Button>
      <Button modifiers="big-rounded" bgColor="white">
        変更
      </Button>
      <Button modifiers="big-rounded" bgColor="white">
        削除
      </Button>
    </ButtonContainer>
  ));
