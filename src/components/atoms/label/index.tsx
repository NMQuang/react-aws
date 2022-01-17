import React from 'react';
import { mapModifiers } from 'src/libs/component';
import { Icon, IconShape } from '../icon';

export interface LabelProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'className' | 'onClick'> {
  children: React.ReactNode;
  modifiers?: 'gray';
  firstIcon?: IconShape;
  secondIcon?: IconShape;
  onClick?: () => void;
}

export const Label: React.FC<LabelProps> = ({ children, modifiers, firstIcon, secondIcon, ...props }) => (
  <label {...props} className={mapModifiers('a-label', modifiers)}>
    {firstIcon && (
      <span className="a-label__first-icon">
        <Icon name={firstIcon} />
      </span>
    )}
    <span className="a-label__label-name">{children}</span>
    {secondIcon && (
      <span className="a-label__second-icon">
        <Icon name={secondIcon} onClick={props.onClick} />
      </span>
    )}
  </label>
);
