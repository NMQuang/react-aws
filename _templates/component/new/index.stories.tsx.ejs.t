---
to: src/components/<%= h.inflection.pluralize(level) %>/<%= h.changeCase.param(name) %>/index.stories.tsx
sh: prettier --write src/components/<%= h.inflection.pluralize(level) %>/<%= h.changeCase.param(name) %>/index.stories.tsx
---
import React from 'react';
import { storiesOf } from '@storybook/react';
import { <%= h.changeCase.pascal(name) %> } from './';

storiesOf('Components/<%= h.changeCase.pascal(level) %>/<%= h.changeCase.pascal(name) %>', module).add('normal', () => (
  <<%= h.changeCase.pascal(name) %>>Sample text</<%= h.changeCase.pascal(name) %>>
));
