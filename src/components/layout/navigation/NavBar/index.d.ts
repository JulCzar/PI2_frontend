import React from 'react';
import { NavItemProps } from '../NavItem';

interface NavBarProps {
  data: NavItemProps[];
}

declare const NavBar: React.FC<NavBarProps>;

export default NavBar;
