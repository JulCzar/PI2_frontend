import React from 'react';

const Input = ({
  name,
  label,
  type,
  className,
  helperText,
  error,
  ...rest
}) => (
  <div className={className}>
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      id={name}
      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
      {...rest}
    />
    <p className={`text-xs italic${error ? ' text-red-500' : ''}`}>
      {helperText}
    </p>
  </div>
);

export default Input;
