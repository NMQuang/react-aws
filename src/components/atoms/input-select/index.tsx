import React from 'react';
import { mapModifiers } from 'src/libs/component';
import Select, { components, SingleValue } from 'react-select';
import { IDataSelect } from 'src/model/iDataSelect';
import { Icon } from '../icon';

export interface InputSelectProps {
  modifiers?: 'none-border';
  options: IDataSelect[];
  onChange?: (e: SingleValue<IDataSelect>) => void;
  name: string;
  placeholder?: string;
}

export const InputSelect: React.FC<InputSelectProps> = props => {
  return (
    <Select
      menuPosition="fixed"
      isClearable
      escapeClearsValue
      classNamePrefix={mapModifiers('a-input-select', props.modifiers)}
      name={props.name}
      options={props.options}
      onChange={props.onChange}
      components={{ DropdownIndicator }}
      placeholder={props.placeholder}
      filterOption={(option, inputvalue) => option.label.includes(inputvalue)}
      noOptionsMessage={() => '該当する値はありません。'}
      hideSelectedOptions
    />
  );
};

const CaretDownIcon = () => {
  return <Icon name="dropdown" />;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DropdownIndicator: React.FC = (dropdownIndicatorProps: any) => {
  return (
    <components.DropdownIndicator {...dropdownIndicatorProps}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  );
};
