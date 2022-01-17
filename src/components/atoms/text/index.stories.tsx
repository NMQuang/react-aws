import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from './';

storiesOf('Components/Atoms/Text', module)
  .add('normal', () => <Text>Sample text</Text>)
  .add('green', () => <Text modifiers="green">Sample text</Text>);
