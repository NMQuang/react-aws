import React from 'react';
import { mapModifiers } from 'src/libs/component';

export interface TextProps {
  children: React.ReactNode;
  modifiers?: 'green';
}

export const Text: React.FC<TextProps> = props => (
  <p className={mapModifiers('a-text', props.modifiers)}>{props.children}</p>
);
