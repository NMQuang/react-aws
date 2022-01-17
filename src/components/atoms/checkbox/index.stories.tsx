import React from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from './';

storiesOf('Components/Atoms/Checkbox', module)
  .add('normal', () => (
    <Checkbox id="1" name="checkbox">
      敷込日
    </Checkbox>
  ))
  .add('with large size', () => (
    <Checkbox id="1" modifiers="large-size" name="checkbox">
      敷込日
    </Checkbox>
  ));
