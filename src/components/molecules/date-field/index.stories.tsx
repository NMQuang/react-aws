import React from 'react';
import { storiesOf } from '@storybook/react';
import { DateField } from './';

storiesOf('Components/Molecules/DateField', module)
  .add('normal', () => (
    <DateField name="raiseDate" onSelect={() => console.log('date')} value={new Date()}>
      引上げ日
    </DateField>
  ))
  .add('error', () => (
    <DateField name="raiseDate" isError onSelect={() => console.log('date')} value={new Date()}>
      引上げ日
    </DateField>
  ));
