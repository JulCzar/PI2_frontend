import React from 'react';

interface LayoutProps {
  title: string;
  titlePosition?: 'center' | 'left' | 'right';
}

declare const Layout: React.FC<LayoutProps>;

export default Layout;
