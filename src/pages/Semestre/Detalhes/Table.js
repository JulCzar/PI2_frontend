import React from 'react';
import { Table as CTable } from '../../../components';
import { bodyItems, headerItems } from './mock';

function Table({ data }) {
  return (
    <div className='w-full overflow-x-auto'>
      <CTable
        header={headerItems}
        body={{
          data: bodyItems,
          renderItem: item => (
            <div>
              <p className='font-semibold text-black'>{item.label1}</p>
              <p className='text-xs text-gray-600'>{item.label2}</p>
              <p className='text-xs text-gray-600'>{item.label3}</p>
            </div>
          ),
        }}
      />
    </div>
  );
}

export default Table;
