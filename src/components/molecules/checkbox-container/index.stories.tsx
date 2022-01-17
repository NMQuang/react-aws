import React from 'react';
import { storiesOf } from '@storybook/react';
import { CheckboxContainer } from './';
import { Checkbox } from 'src/components/atoms/checkbox';

storiesOf('Components/Molecules/CheckboxContainer', module)
  .add('normal', () => (
    <CheckboxContainer>
      <Checkbox id="1" name="checkbox">
        敷込日
      </Checkbox>
      <Checkbox id="2" name="checkbox">
        敷込日
      </Checkbox>
    </CheckboxContainer>
  ))
  .add('second-container', () => (
    <CheckboxContainer modifiers="second-container">
      <Checkbox id="1" name="checkbox" modifiers="large-size">
        戸建て
      </Checkbox>
      <Checkbox id="2" name="checkbox" modifiers="large-size">
        敷込日
      </Checkbox>
      <Checkbox id="3" name="checkbox" modifiers="large-size">
        敷込日
      </Checkbox>
    </CheckboxContainer>
  ));
