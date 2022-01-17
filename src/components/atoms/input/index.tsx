import React, { forwardRef } from 'react';
import { mapModifiers } from 'src/libs/component';
import { IDataList } from 'src/model/iDataList';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'type' | 'onChange' | 'onBlur'> {
  modifiers?: 'datalist' | 'datalist2' | 'rounded';
  onSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selfbranchname?: string;
  ref?: React.Ref<HTMLInputElement>;
  options?: IDataList[];
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = forwardRef(
  ({ modifiers, onSelect, onBlur, options, ...props }, ref: React.Ref<HTMLInputElement>) => {
    return (
      <label htmlFor={props.id} className={mapModifiers('a-input', modifiers)}>
        <input
          {...props}
          type="text"
          onChange={onSelect}
          className="a-input__input"
          autoComplete="off"
          name={props.name}
          value={props.value}
          onBlur={onBlur}
          ref={ref}
          disabled={props.disabled}
        />
        {modifiers === 'datalist' && (
          <>
            <datalist id={props.list}>
              {options && options.map(item => <option value={item.key} key={item.key} />)}
            </datalist>
            <span className="a-input__item-name">{props.selfbranchname}</span>
          </>
        )}

        {modifiers === 'datalist2' && (
          <>
            <datalist id={props.list}>
              {options && options.map(item => <option value={item.value} key={item.key} />)}
            </datalist>{' '}
          </>
        )}
      </label>
    );
  }
);
Input.displayName = 'Input';
