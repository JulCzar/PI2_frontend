import React from 'react';

const Button = ({ children }) => (
  <div className='inline-flex items-end'>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
      {children}
    </button>
  </div>
);

export default Button;
