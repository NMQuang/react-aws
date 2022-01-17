---
to: src/components/<%= h.inflection.pluralize(level) %>/<%= h.changeCase.param(name) %>/index.tsx
sh: prettier --write src/components/<%= h.inflection.pluralize(level) %>/<%= h.changeCase.param(name) %>/index.tsx
---
import React from 'react';
import { mapModifiers } from "src/libs/component";

export interface <%= h.changeCase.pascal(name) %>Props {
  children: React.ReactNode,
  modifiers?: 'red' | 'blue' | 'green';
}

export const <%= h.changeCase.pascal(name) %>: React.FC<<%= h.changeCase.pascal(name) %>Props> = (props) => (
  <div className={mapModifiers('<%= level[0] %>-<%= h.changeCase.param(name) %>', props.modifiers)}>
    {props.children}
  </div>
);
