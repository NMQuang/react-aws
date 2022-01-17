import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputTime } from './';

storiesOf('Components/Atoms/InputTime', module)
  .add('24h', () => (
    <InputTime timeformat="24h" name="time" onSelect={() => console.log('date')} value={new Date()} />
  ))
  .add('12h', () => (
    <InputTime timeformat="12h" name="time" onSelect={() => console.log('date')} value={new Date()} />
  ));
