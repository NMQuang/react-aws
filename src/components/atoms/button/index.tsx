import React from 'react';
import { mapModifiers } from 'src/libs/component';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'onClick'> {
  children: React.ReactNode;
  modifiers?: 'small' | 'rounded' | 'big-rounded';
  bgColor?: 'green' | 'white';
  onClickRequest?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ children, modifiers, bgColor, onClickRequest, ...props }) => (
  <button
    {...props}
    className={mapModifiers('a-button', modifiers, bgColor || 'gray')}
    onClick={onClickRequest}
  >
    {children}
  </button>
);
