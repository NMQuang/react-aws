import React from 'react';
import { storiesOf } from '@storybook/react';
import { Label } from './';

storiesOf('Components/Atoms/Label', module)
  .add('normal', () => (
    <Label id="sampleInputId" firstIcon="bullet">
      鍵情報
    </Label>
  ))
  .add('gray', () => <Label modifiers="gray">鍵情報</Label>)
  .add('gray with 1 icon', () => (
    <Label modifiers="gray" secondIcon="search">
      Sample
    </Label>
  ))
  .add('gray with 2 icons', () => (
    <Label modifiers="gray" secondIcon="location">
      現場住所
    </Label>
  ));
