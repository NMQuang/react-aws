import React from 'react';
import { storiesOf } from '@storybook/react';
import { SelectForm } from './';
import { IDataSelect } from 'src/model/iDataSelect';

const list: IDataSelect[] = [
  { label: '01', value: '斎藤' },
  { label: '02', value: '勿来' },
  { label: '03', value: '関本' },
  { label: '04', value: '鈴木木材' },
  { label: '05', value: '鈴木木材2' },
  { label: '06', value: '鈴木木材3' },
  { label: '07', value: '鈴木木材4' },
  { label: '08', value: '鈴木木材5' },
  { label: '09', value: '鈴木木材6' },
  { label: '10', value: '鈴木木材7' },
  { label: '11', value: '鈴木木材8' },
  { label: '12', value: '鈴木木材9' },
];

storiesOf('Components/Molecules/SelectForm', module).add('normal', () => (
  <SelectForm modifierLabel="gray" options={list} nameSelect="select">
    Sample text
  </SelectForm>
));
