import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dropdown } from './';
import { IDropdown } from 'src/model/idropdown';

export const options: IDropdown[] = [
  { key: '斎藤', value: 2000 },
  { key: '勿来', value: 3000 },
  { key: '関本', value: 3000 },
  { key: '鈴木木材', value: 3000 },
];

storiesOf('Components/Atoms/Dropdown', module).add('normal', () => <Dropdown listItem={options} />);
