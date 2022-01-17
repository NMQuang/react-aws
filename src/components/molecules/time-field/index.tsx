import React from 'react';
import { InputTime } from 'src/components/atoms/input-time';
import { Label } from 'src/components/atoms/label';
import { mapModifiers } from 'src/libs/component';

export interface TimeFieldProps {
  children?: React.ReactNode;
  name: string;
  isError?: boolean;
  value: Date | null;
  onSelect: (date: Date | null) => void;
}

export const TimeField: React.FC<TimeFieldProps> = props => (
  <div className={mapModifiers('m-time-field', props.isError && 'error')}>
    <Label modifiers="gray" htmlFor={props.name}>
      {props.children}
    </Label>
    <InputTime timeformat="24h" name={props.name} value={props.value} onSelect={props.onSelect} />
  </div>
);
