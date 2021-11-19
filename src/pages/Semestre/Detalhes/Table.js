import React from 'react';
import { Table as CTable } from '../../../components';
import { bodyItems, headerItems } from './mock';

function Table() {
  return (
    <div className='w-full overflow-x-auto'>
      <CTable
        header={headerItems}
        body={{
          data: bodyItems,
          renderItem: ({ item }) => (
            <td className='px-4 py-3 border'>
              <div>
                <p className='font-semibold text-black'>{item.label1}</p>
                <p className='text-xs text-gray-600'>{item.label2}</p>
                <p className='text-xs text-gray-600'>{item.label3}</p>
              </div>
            </td>
          ),
        }}
      />
    </div>
  );
}

export default Table;
