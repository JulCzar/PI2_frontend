import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../';
import { NavBar } from '../navigation';

const Header = () => (
  <nav className='font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full'>
    <div className='mb-2 sm:mb-0'>
      <Link
        to='/sala'
        className='text-2xl no-underline text-grey-darkest hover:text-blue-dark'>
        Home
      </Link>
    </div>
    <NavBar data={data} />
  </nav>
);

export default Header;
