import React from 'react';
import { Layout } from 'src/components';

const ListarHorario = () => (
  <Layout title='Horario'>
    <div className='w-full mb-8 overflow-hidden rounded-lg shadow-lg'>
      <table className='w-full'>
        <tbody className='bg-white'>
          <tr className='text-gray-700'>
            <td className='px-4 py-3 border'>
              <a href='detalhes_horario.html'>
                <div>
                  <p className='font-semibold text-black'>2021/1</p>
                </div>
              </a>
            </td>
            <td className='px-4 py-3 border'>
              <div className='flex items-center text-sm'></div>
              <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'>
                  Editar
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
);

export default ListarHorario;
