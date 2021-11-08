import React from 'react';
import { Body, Header } from './components';

const Table = ({ header, body, footer }) => (
  <div className='w-full overflow-x-auto'>
    <table className='w-full'>
      <Header data={header} />
      <Body {...body} />
    </table>
    <div className='w-full d-flex'>{footer}</div>
  </div>
);

export default Table;