import React from 'react';

export interface NavItemProps {
  href: string;
  label: string;
}

declare const NavItem: React.FC<NavItemProps>;

export default NavItem;
