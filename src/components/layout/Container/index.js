import React from 'react';

/** @type {React.FC} */
const Container = ({ children }) => (
  <section className='container mx-auto p-6 font-mono'>{children}</section>
);

export default Container;
