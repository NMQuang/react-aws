import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputForm } from './';
import { IDataList } from 'src/model/iDataList';

const options: IDataList[] = [
  { key: '01', value: '斎藤' },
  { key: '02', value: '勿来' },
  { key: '03', value: '関本' },
  { key: '04', value: '鈴木木材' },
];
storiesOf('Components/Molecules/InputForm', module)
  .add('normal', () => (
    <InputForm modifierLabel="gray" modifiers="datalist" listInput="sample" optionsInput={options}>
      鍵情報
    </InputForm>
  ))
  .add('disabled', () => (
    <InputForm modifierLabel="gray" modifiers="datalist" listInput="sample" optionsInput={options} disabled>
      鍵情報
    </InputForm>
  ));
