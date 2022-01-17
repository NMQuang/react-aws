import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputSelect } from './';
import { IDataSelect } from 'src/model/iDataSelect';
import { SingleValue } from 'react-select';

export const list: IDataSelect[] = [
  { label: '斎藤', value: '01' },
  { label: '勿来', value: '02' },
  { label: '関本', value: '03' },
  { label: '鈴木木材', value: '04' },
  { label: '鈴木木材2', value: '05' },
  { label: '鈴木木材3', value: '06' },
  { label: '鈴木木材4', value: '07' },
  { label: '鈴木木材5', value: '08' },
  { label: '鈴木木材6', value: '09' },
  { label: '鈴木木材7', value: '10' },
  { label: '鈴木木材8', value: '11' },
  { label: '鈴木木材9', value: '12' },
];

export const listOrderLefttable: IDataSelect[] = [
  { label: 'TS', value: '01' },
  { label: 'OTP', value: '02' },
  { label: 'FS', value: '03' },
];

export const listOrderLeft: IDataSelect[] = [
  { label: '畳新規', value: '01' },
  { label: '畳オプション', value: '02' },
  { label: '襖新規', value: '03' },
];

export const listOrderRight: IDataSelect[] = [
  { label: '枚', value: '01' },
  { label: '箇所', value: '02' },
];

const onChangeInputValue = (value: SingleValue<IDataSelect>) => {
  // eslint-disable-next-line no-console
  console.log(value);
};

storiesOf('Components/Atoms/InputSelect', module)
  .add('normal', () => (
    <InputSelect options={list} onChange={onChangeInputValue} name="Select" placeholder="" />
  ))
  .add('none-border', () => (
    <InputSelect options={list} onChange={onChangeInputValue} name="Select" modifiers="none-border" />
  ));
