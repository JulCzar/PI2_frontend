import React from 'react';

const ListarHorario = () => {
  return (
    <>
      <nav className='font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full'>
        <div className='mb-2 sm:mb-0'>
          <a className='text-2xl no-underline text-grey-darkest hover:text-blue-dark'>
            Home
          </a>
        </div>
        <div>
          <a
            href='cadastrar_horario.html'
            className='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2'>
            Cadastrar Horário
          </a>
          <a
            href='cadastrar_sala.html'
            className='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2'>
            Cadastrar Sala
          </a>
          <a
            href='lista_horarios.html'
            className='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2'>
            Horários
          </a>
        </div>
      </nav>

      <section className='container mx-auto p-6 font-mono'>
        <h1 className='text-center w-full font-semibold text-3xl text-gray-600 p-4'>
          {' '}
          Horários{' '}
        </h1>
        <div className='w-full mb-8 overflow-hidden rounded-lg shadow-lg'>
          <table className='w-full'>
            <tbody className='bg-white'>
              <tr className='text-gray-700'>
                <td className='px-4 py-3 border'>
                  <a href='detalhes_horario.html'>
                    <div className='flex items-center text-sm'></div>
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
      </section>

      <footer className='relative bg-blueGray-200 pt-8 pb-6'>
        <div className='container mx-auto px-4'></div>
        <hr className='my-6 border-blueGray-300' />
        <div className='flex flex-wrap items-center md:justify-between justify-center'>
          <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
            <div className='text-sm text-blueGray-500 font-semibold py-1'>
              Copyright © <span id='get-current-year'>2021</span>
              <a
                href='https://www.creative-tim.com/product/notus-js'
                className='text-blueGray-500 hover:text-gray-800'
                target='_blank'
                rel='noreferrer'>
                {' '}
                Universidade Estadual do Tocantins - UNITINS
              </a>
              .
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ListarHorario;
