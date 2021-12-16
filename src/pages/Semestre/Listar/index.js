import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Table } from 'src/components';
import Loading from 'src/pages/Loading';
import { getSemesters } from 'src/services/semester';
import { headerItems } from './mock';

const ListarSemestre = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getSemesters()
      .then(s =>
        setItems(
          s.semesters.map(s => [{ item: s.school_year }, { item: s.id }])
        )
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout title='Semestres'>
      {isLoading && <Loading />}
      <div className='w-2/3 mx-auto'>
        <Table
          header={headerItems}
          body={{
            data: items,
            renderItem: (sem, pos, def) => {
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
                    to={`/semestre/disciplina/${sem}`}
                    className='text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark'>
                    Períodos
                  </Link>
                  <Link
                    to='/semestre/sem.id'
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
