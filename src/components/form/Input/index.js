import React from 'react';

const Input = ({ name, label, type, className, ...rest }) => (
  <div className={className}>
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      id={name}
      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
      {...rest}
    />
  </div>
);

export default Input;
