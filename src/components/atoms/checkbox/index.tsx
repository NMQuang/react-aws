import React from 'react';
import { mapModifiers } from 'src/libs/component';
import { Icon } from '../icon';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'onChange' | 'type'> {
  children: React.ReactNode;
  modifiers?: 'large-size';
  onSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ children, modifiers, ...props }) => {
  return (
    <label htmlFor={props.id} className={mapModifiers('a-checkbox', modifiers)}>
      {children}
      <span>
        <Icon name={props.checked ? 'checkbox-checked' : 'checkbox'} />
      </span>
      <input
        {...props}
        className="a-checkbox__checkbox-input"
        onChange={props.onSelect}
        type={'checkbox'}
        name={props.name}
      />
    </label>
  );
};
