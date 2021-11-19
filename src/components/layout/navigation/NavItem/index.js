import React from 'react';
import { Link } from 'react-router-dom';
const className =
  'text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2';
const NavItem = ({ href, label }) => (
  <Link to={href} className={className}>
    {label}
  </Link>
);

export default NavItem;
