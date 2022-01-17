import React from 'react';
import { storiesOf } from '@storybook/react';
import { QuotationPrinting } from './';

storiesOf('Components/Templates/QuotationPrinting', module).add('normal', () => (
  <QuotationPrinting>Sample text</QuotationPrinting>
));
