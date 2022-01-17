import React from 'react';
import { mapModifiers } from 'src/libs/component';
export interface ButtonContainerProps {
  children: React.ReactNode;
  modifiers?: 'second-container' | 'rounded-container' | 'button-green';
}

export const ButtonContainer: React.FC<ButtonContainerProps> = props => (
  <ul className={mapModifiers('m-button-container', props.modifiers)}>
    {React.Children.map(props.children, (item, index) => (
      <li key={index} className="m-button-container__item">
        {item}
      </li>
    ))}
  </ul>
);
