import React from 'react';
import { mapModifiers } from 'src/libs/component';

export interface CheckboxContainerProps {
  children: React.ReactNode | React.ReactNode[];
  modifiers?: 'second-container';
}

export const CheckboxContainer: React.FC<CheckboxContainerProps> = props => (
  <ul className={mapModifiers('m-checkbox-container', props.modifiers)}>
    {React.Children.map(props.children, (item, index) => (
      <li key={index} className="m-checkbox-container__item">
        {item}
      </li>
    ))}
  </ul>
);
