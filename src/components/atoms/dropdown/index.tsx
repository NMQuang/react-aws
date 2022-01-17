import React, { useState } from 'react';
import { IDropdown } from 'src/model/idropdown';
export interface DropdownProps {
  listItem: IDropdown[];
}

export const Dropdown: React.FC<DropdownProps> = props => {
  const [selectedValue, setSelectedValue] = useState('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(
      e.target.value === ''
        ? ''
        : props.listItem.filter(item => item.key === e.target.value)[0].value.toString()
    );
  };

  return (
    <div className="a-dropdown">
      <select className="a-dropdown__select" onChange={e => onChangeHandler(e)}>
        <option value=""></option>
        {props.listItem.map((item, index) => (
          <option value={item.key} key={index}>
            {item.key}
          </option>
        ))}
      </select>
      {selectedValue !== '' && <span className="a-dropdown__number">{selectedValue}</span>}
    </div>
  );
};
