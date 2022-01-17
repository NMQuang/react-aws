import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from './';
import { IDataList } from 'src/model/iDataList';

const options: IDataList[] = [
  { key: '01', value: '斎藤' },
  { key: '02', value: '勿来' },
  { key: '03', value: '関本' },
  { key: '04', value: '鈴木木材' },
];
storiesOf('Components/Atoms/Input', module)
  .add('normal', () => <Input></Input>)
  .add('data-list', () => <Input id="test" modifiers="datalist" list="browsers" options={options}></Input>)
  .add('data-list-2', () => <Input id="test" modifiers="datalist2" list="browsers" options={options}></Input>)
  .add('rounded', () => <Input modifiers="rounded"></Input>);
