import React from 'react';
import { IconShape } from 'src/components/atoms/icon';
import { Input, InputProps } from 'src/components/atoms/input';
import { Label } from 'src/components/atoms/label';
import { IDataList } from 'src/model/iDataList';

export interface InputFormProps extends InputProps {
  children: React.ReactNode;
  modifierLabel?: 'gray';
  firstIconLabel?: IconShape;
  secondIconLable?: IconShape;
  optionsInput?: IDataList[];
  listInput?: string;
  value?: string;
  onClick?: () => void;
}

export const InputForm: React.FC<InputFormProps> = (props, { ...inputProps }) => (
  <div className="m-input-form">
    <Label
      modifiers={props.modifierLabel}
      firstIcon={props.firstIconLabel}
      secondIcon={props.secondIconLable}
      onClick={props.onClick}
    >
      {props.children}
    </Label>
    <Input
      {...inputProps}
      placeholder={props.placeholder}
      modifiers={props.modifiers}
      list={props.listInput}
      options={props.optionsInput}
      onSelect={props.onSelect}
      value={props.value}
      onBlur={props.onBlur}
      selfbranchname={props.selfbranchname}
      disabled={props.disabled}
    />
  </div>
);
