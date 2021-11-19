import React from 'react';
import { Layout } from '../../../components';
import Table from './Table';

const index = () => (
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
    <Table />
  </Layout>
);

export default index;
