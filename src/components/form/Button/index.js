import React from 'react';

/** @type {React.FC<import('react').ButtonHTMLAttributes>} */
const Button = ({ children, ...rest }) => (
  <div className='inline-flex items-end'>
    <button
      {...rest}
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
      {children}
    </button>
  </div>
);

export default Button;
