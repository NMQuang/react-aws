import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './';

storiesOf('Components/Atoms/Button', module)
  .add('normal', () => <Button>ダッシュボード</Button>)
  .add('with bgColor green', () => (
    <Button bgColor="green">
      ダッシュボード
      <br />
      ボード
    </Button>
  ))
  .add('with small and bgColor green', () => (
    <Button modifiers="small" bgColor="green">
      ダッシュボード
    </Button>
  ))
  .add('rounded', () => <Button modifiers="rounded">ダッシ</Button>)
  .add('rounded with bgColor white', () => (
    <Button modifiers="rounded" bgColor="white">
      削除
    </Button>
  ))
  .add('big-rounded', () => <Button modifiers="big-rounded">ダッシ</Button>);
