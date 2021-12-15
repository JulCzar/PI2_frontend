import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Table } from 'src/components';
import { getSemesters } from 'src/services/semester';
import { bodyItems, headerItems } from './mock';

const ListarSemestre = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    getSemesters().then(setItems);
  }, []);

  return (
    <Layout title='Semestres'>
      <div className='w-2/3 mx-auto'>
        <Table
          header={headerItems}
          body={{
            data: bodyItems,
            renderItem: (_, pos, def) => {
              return !pos ? (
                def
              ) : (
                <>
                  <a
                    href='#'
                    className='text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark'>
                    Editar
                  </a>
                  <a
                    href='#'
                    className='text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark'>
                    Remover
                  </a>
                  <Link
                    to='/semestre/disciplina/id'
                    className='text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark'>
                    Períodos
                  </Link>
                  <Link
                    to='/semestre/id'
                    className='text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark'>
                    Horários
                  </Link>
                </>
              );
            },
          }}
        />
      </div>
    </Layout>
  );
};

export default ListarSemestre;
