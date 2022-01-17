import React from 'react';
import { InputDate } from 'src/components/atoms/input-date';
import { Label } from 'src/components/atoms/label';
import { mapModifiers } from 'src/libs/component';

export interface DateFieldProps {
  children?: React.ReactNode;
  name: string;
  isError?: boolean;
  onSelect: (date: Date | null) => void;
  value: Date;
}

export const DateField: React.FC<DateFieldProps> = props => (
  <div className={mapModifiers('m-date-field', props.isError && 'error')}>
    <Label modifiers="gray" htmlFor={props.name}>
      {props.children}
    </Label>
    <InputDate name={props.name} onSelect={props.onSelect} value={props.value} />
  </div>
);
