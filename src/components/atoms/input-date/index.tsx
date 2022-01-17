import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export interface InputDateProps {
  children?: React.ReactNode;
  name: string;
  onSelect: (date: Date | null) => void;
  value: Date;
}

export const InputDate: React.FC<InputDateProps> = props => {
  const [startDate, setStartDate] = useState<Date | null>();

  return (
    <div className="a-input-date">
      <DatePicker
        id={props.name}
        className="a-input-date__input"
        placeholderText="YYYY-MM-DD"
        name={props.name}
        // selected={startDate}
        selected={props.value}
        // onChange={(date: Date | null) => setStartDate(date)}
        onChange={props.onSelect}
        dateFormat="yyyy-MM-dd"
        onKeyDown={e => {
          if (e.key !== 'Backspace') {
            e.preventDefault();
          } else setStartDate(null);
        }}
      />
    </div>
  );
};
