import React from 'react';
import ReactSelect from 'react-select';

import { selectStyles } from './StyledComponents';

export const Select = ({
  className,
  value,
  name,
  onChange,
  options,
  defaultValue,
  placeholder,
  menuPlacement = 'bottom',
}) => {
  return (
    <ReactSelect
      className={className}
      value={value}
      styles={selectStyles}
      placeholder={placeholder}
      defaultValue={defaultValue}
      isSearchable={true}
      name={name}
      options={options}
      onChange={onChange}
      menuPlacement={menuPlacement}
    />
  );
};
