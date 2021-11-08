import React from 'react';
import NavItem from '../NavItem';

/** @type {React.FC<{ data: import('../NavItem').NavItemProps[]}>} */
const NavBar = ({ data }) => (
  <div className='mb-2 sm:mb-0'>
    {data.map((props, i) => (
      <NavItem {...props} />
    ))}
  </div>
);

export default NavBar;
