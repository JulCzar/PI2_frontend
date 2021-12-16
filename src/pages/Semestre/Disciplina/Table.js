import React from 'react';
import { Table as CTable } from 'src/components';

import { bodyItems, headerItems } from './mock';

const Table = ({ onOpen }) => {
  return (
    <div className='w-2/3 mx-auto'>
      <CTable
        header={headerItems}
        body={{
          data: bodyItems,
          renderItem: (_, pos, def, i) =>
            !pos ? (
              def
            ) : (
              <>
                <button className='text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark'>
                  Zerar Disciplina
                </button>
                <button
                  onClick={onOpen(i + 1)}
                  className='text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark'>
                  Ofertar Disciplina
                </button>
              </>
            ),
        }}
      />
    </div>
  );
};

export default Table;
