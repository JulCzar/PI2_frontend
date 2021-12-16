import React from 'react';
import { Layout, Table } from 'src/components';
import { getClassrooms } from 'src/services/classroom';
import { bodyItems, headerItems } from './mock';

const ListarSala = () => {
  const [classrooms, setClassrooms] = React.useState([]);

  React.useEffect(() => {
    getClassrooms().then(c =>
      setClassrooms(c?.classrooms.map(c => [{ item: c.name }, { item: null }]))
    );
  }, []);

  return (
    <Layout title='Salas'>
      <div className='w-2/3 mx-auto'>
        <Table
          header={headerItems}
          body={{
            data: bodyItems,
            renderItem: (_, pos, def) => {
              if (!pos) return def;

              return (
                <>
                  <button className='text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark'>
                    Editar
                  </button>
                  <button className='text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark'>
                    Remover
                  </button>
                </>
              );
            },
          }}
        />
      </div>
    </Layout>
  );
};

export default ListarSala;
