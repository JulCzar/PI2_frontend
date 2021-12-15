import React from 'react';

/** @type {React.FC<import('react').ButtonHTMLAttributes>} */
const Button = ({ children, ...rest }) => (
  <div className='flex items-end'>
    <button
      {...rest}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${rest.className}`}>
      {children}
    </button>
  </div>
);

export default Button;
