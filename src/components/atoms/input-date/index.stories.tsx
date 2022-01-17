import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputDate } from './';

storiesOf('Components/Atoms/InputDate', module).add('normal', () => (
  <InputDate name="date" onSelect={() => console.log('date')} value={new Date()} />
));
