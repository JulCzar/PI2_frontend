import React from 'react';
import { default as RSelect } from 'react-select';
import { styles } from './styles';

const Select = ({
  options,
  label,
  placeholder = 'Selecione...',
  className,
  ...rest
}) => (
  <div className={className}>
    <label htmlFor={rest.name}>{label}</label>
    <RSelect
      className='mt-1'
      placeholder={placeholder}
      options={options}
      styles={styles}
      {...rest}
    />
  </div>
);

export default Select;
