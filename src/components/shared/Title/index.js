import React from 'react';

const Title = ({ children, className }) => (
  <h1 className={`font-semibold text-3xl text-gray-600 p-4 ${className}`}>
    {children}
  </h1>
);

export default Title;
