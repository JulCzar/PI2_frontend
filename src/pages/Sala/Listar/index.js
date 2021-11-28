import React from 'react';
import { Layout, Table } from 'src/components';
import { bodyItems, headerItems } from './mock';

const ListarSala = () => (
  <Layout title='Salas'>
    <div className='w-2/3 mx-auto'>
      <Table
        header={headerItems}
        body={{
          data: bodyItems,
          renderItem: (_, pos, def) =>
            !pos ? (
              def
            ) : (
              <>
                <button className='text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark'>
                  Editar
                </button>
                <button className='text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark'>
                  Remover
                </button>
              </>
            ),
        }}
      />
    </div>
  </Layout>
);

export default ListarSala;
