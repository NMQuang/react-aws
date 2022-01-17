import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from './';

storiesOf('Components/Atoms/Icon', module)
  .add('bell', () => <Icon name="bell" />)
  .add('bullet', () => <Icon name="bullet" />)
  .add('cancel', () => <Icon name="cancel" />)
  .add('checkbox-checked', () => <Icon name="checkbox-checked" />)
  .add('checkbox', () => <Icon name="checkbox" />)
  .add('dropdown', () => <Icon name="dropdown" />)
  .add('location', () => (
    <div style={{ height: '50px', background: 'gray' }}>
      <Icon name="location" />
    </div>
  ))
  .add('notification-bell', () => <Icon name="notification-bell" />)
  .add('search', () => (
    <div style={{ height: '50px', background: 'gray' }}>
      <Icon name="search" />
    </div>
  ))
  .add('setting', () => <Icon name="setting" />);
