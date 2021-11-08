import { FC } from 'react';

export interface HeaderItem {
  label: string;
}

interface HeaderProps {
  data: HeaderItem[];
}

declare const Header: FC<HeaderProps>;

export default Header;
