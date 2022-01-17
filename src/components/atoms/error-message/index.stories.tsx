import React from 'react';
import { storiesOf } from '@storybook/react';
import { ErrorMessage } from './';

storiesOf('Components/Atoms/ErrorMessage', module).add('normal', () => (
  <ErrorMessage>Sample text</ErrorMessage>
));
