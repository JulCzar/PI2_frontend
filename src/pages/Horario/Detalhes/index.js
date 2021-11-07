import React from 'react';

const index = () => {
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
          2021/1{' '}
        </h1>
        <div className='w-full mb-8 overflow-hidden rounded-lg shadow-lg'>
          <div className='w-full overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600'>
                  <th className='px-4 py-3'>Segunda-Feira</th>
                  <th className='px-4 py-3'>Terça-Feira</th>
                  <th className='px-4 py-3'>Quarta-Feira</th>
                  <th className='px-4 py-3'>Quarta-Feira</th>
                  <th className='px-4 py-3'>Sexta-Feira</th>
                  <th className='px-4 py-3'>Sábado</th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                <tr className='text-gray-700'>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina A</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina B</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina C</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina D</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina E</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina F</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                </tr>

                <tr className='text-gray-700'>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina G</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina I</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina J</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina L</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina M</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina N</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                </tr>

                <tr className='text-gray-700'>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina O</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina P</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina Q</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina R</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina S</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina T</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                </tr>

                <tr className='text-gray-700'>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina U</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina V</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina W</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina X</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina Y</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina Z</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                </tr>

                <tr className='text-gray-700'>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina ZAB</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina AB</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina BC</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina CD</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina DE</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina EF</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                </tr>

                <tr className='text-gray-700'>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina FG</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina GH</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina HI</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina IJ</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina JK</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina KL</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                </tr>

                <tr className='text-gray-700'>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina LM</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina MN</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina NO</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina OP</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina PQ</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina QR</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                </tr>

                <tr className='text-gray-700'>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina RS</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina ST</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina TU</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina UV</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina VW</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 border'>
                    <div className='flex items-center text-sm'></div>
                    <div>
                      <p className='font-semibold text-black'>Disciplina WX</p>
                      <p className='text-xs text-gray-600'>Sala A</p>
                      <p className='text-xs text-gray-600'>4 Aulas</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className='text-center'>
        <div className='inline-flex items-end'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Gerar Horário
          </button>
        </div>
      </div>

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

export default index;
