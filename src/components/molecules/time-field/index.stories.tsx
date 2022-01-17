import React from 'react';
import { storiesOf } from '@storybook/react';
import { TimeField } from './';

storiesOf('Components/Molecules/TimeField', module)
  .add('normal', () => (
    <TimeField name="time" value={new Date()} onSelect={() => console.log('TIME')}>
      時間
    </TimeField>
  ))
  .add('error', () => (
    <TimeField name="time" isError value={new Date()} onSelect={() => console.log('TIME')}>
      時間
    </TimeField>
  ));
