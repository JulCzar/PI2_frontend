import React from 'react';

const NavItem = ({ href, label }) => (
  <a
    href={href}
    className='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2'>
    {label}
  </a>
);

export default NavItem;
