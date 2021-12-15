import React from 'react';
import { useParams } from 'react-router';
import { getSemesterById } from 'src/services/semester';
import { Layout } from '../../../components';
import Table from './Table';

const Detalhes = () => {
  const [data, setData] = React.useState([[]]);
  const { id } = useParams();

  React.useEffect(() => getSemesterById(id).then(setData), []);

  return (
    <Layout
      title={
        <div className='flex w-full justify-between items-center'>
          <div>2021/1</div>

          <div className='text-center'>
            <div className='inline-flex items-end'>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Gerar Horário
              </button>
            </div>
          </div>
        </div>
      }>
      <Table data={data} />
    </Layout>
  );
};

export default Detalhes;
