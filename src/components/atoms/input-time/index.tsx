import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

export interface InputTimeProps {
  children?: React.ReactNode;
  timeformat: '24h' | '12h';
  name: string;
  value: Date | null;
  onSelect: (date: Date | null) => void;
}

export const InputTime: React.FC<InputTimeProps> = props => {
  const [selectTime, setselectTime] = useState<Date | null>();

  return (
    <DatePicker
      id={props.name}
      className="a-input-time"
      showTimeSelect
      name={props.name}
      selected={props.value}
      placeholderText="HH:MM"
      showTimeSelectOnly
      dateFormat="HH:mm"
      autoComplete="off"
      // onChange={(date: Date | null) => setselectTime(date)}
      onChange={props.onSelect}
      timeFormat={props.timeformat === '24h' ? 'HH:mm' : 'hh:mm a'}
      timeIntervals={1}
      onKeyDown={e => {
        if (e.key === 'Backspace') {
          setselectTime(null);
        } else if (!/[0-9:]/.test(e.key)) {
          e.preventDefault();
        }
      }}
    />
  );
};
