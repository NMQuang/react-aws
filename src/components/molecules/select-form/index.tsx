import React from 'react';
import { SingleValue } from 'react-select';
import { IconShape } from 'src/components/atoms/icon';
import { InputSelect } from 'src/components/atoms/input-select';
import { Label } from 'src/components/atoms/label';
import { mapModifiers } from 'src/libs/component';
import { IDataSelect } from 'src/model/iDataSelect';

export interface SelectFormProps {
  children: React.ReactNode;
  modifiers?: 'red' | 'blue' | 'green';
  modifierLabel?: 'gray';
  firstIconLabel?: IconShape;
  secondIconLable?: IconShape;
  onClick?: () => void;
  onChange?: (e: SingleValue<IDataSelect>) => void;
  options: IDataSelect[];
  nameSelect: string;
  placeholder?: string;
}

export const SelectForm: React.FC<SelectFormProps> = props => (
  <div className={mapModifiers('m-select-form', props.modifiers)}>
    <Label
      modifiers={props.modifierLabel}
      firstIcon={props.firstIconLabel}
      secondIcon={props.secondIconLable}
      onClick={props.onClick}
    >
      {props.children}
    </Label>
    <InputSelect
      options={props.options}
      name={props.nameSelect}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  </div>
);
