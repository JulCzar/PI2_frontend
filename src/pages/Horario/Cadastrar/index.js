import React, { useState } from 'react';
import { Layout } from '../../../components';

const CadastrarHorario = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <Layout title='Cadastro'>
      <div className='container max-w-screen-lg mx-auto'>
        <div>
          <div className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'>
            <div className='mt-6 grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2'>
              <div className='lg:col-span-2'>
                <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6'>
                  <div className='md:col-span-6'>
                    <label htmlFor='full_name'>Período Letivo</label>
                    <input
                      type='text'
                      name='full_name'
                      id='full_name'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      value=''
                    />
                  </div>

                  <div className='md:col-span-3'>
                    <label htmlFor='email'>Campus</label>
                    <select
                      type='text'
                      name='email'
                      id='email'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      value=''
                      placeholder=''>
                      <option value='1'>Palmas</option>
                    </select>
                  </div>

                  <div className='md:col-span-3'>
                    <label htmlFor='address'>Curso</label>
                    <select
                      type='text'
                      name='address'
                      id='address'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      value=''
                      placeholder=''>
                      <option value='1'>Sistemas de Informação</option>
                    </select>
                  </div>

                  <div className='md:col-span-6'>
                    <label htmlFor='city'>Matriz Curricular</label>
                    <select
                      type='text'
                      name='city'
                      id='city'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      value=''
                      placeholder=''>
                      <option value='1'>Antiga</option>
                      <option value='1'>Nova</option>
                    </select>
                  </div>

                  <div className='md:col-span-6'>
                    <label htmlFor='country'>Período</label>
                    <select
                      type='text'
                      name='city'
                      id='city'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      value=''
                      placeholder=''>
                      <option value='1'>1° Período</option>
                      <option value='2'>2° Período</option>
                      <option value='3'>3° Período</option>
                      <option value='4'>4° Período</option>
                      <option value='5'>5° Período</option>
                      <option value='6'>6° Período</option>
                      <option value='7'>7° Período</option>
                      <option value='8'>8° Período</option>
                    </select>
                  </div>

                  <div className='md:col-span-6'>
                    <label htmlFor='state'>Horário Semanal</label>
                    <div className='h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1'>
                      <input
                        onClick={() => setModalState(true)}
                        type='text'
                        name='sala'
                        id='sala'
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      />
                    </div>
                  </div>

                  <div className='mt-5 md:col-span-6 text-right'>
                    <div className='inline-flex items-end'>
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Cancelar
                      </button>
                    </div>
                    <div className='inline-flex items-end'>
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Cadastrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalState && (
        <div
          className='main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster'
          style={{ background: 'rgba(0,0,0,.7)' }}
          onClick={() => setModalState(false)}>
          <div
            className='border border-teal-500 modal-container bg-white rounded  overflow-y-auto'
            onClick={e => e.stopPropagation()}>
            <div className='modal-content py-4 text-left px-6'>
              <div className='modal-close cursor-pointer z-50'></div>
              <div className='container max-w-screen-lg mx-auto'>
                <div>
                  <div className='bg-white rounded  p-4 px-4 md:p-8 mb-6'>
                    <h2 className='font-semibold text-4xl text-gray-600'>
                      Horário Semanal
                    </h2>
                    <div className='mt-6 grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2'>
                      <div className='lg:col-span-2'>
                        <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6'>
                          <div className='md:col-span-2'>
                            <label htmlFor='email'>Disciplina</label>
                            <select
                              type='text'
                              name='email'
                              id='email'
                              className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                              value=''
                              placeholder=''>
                              <option value=''></option>
                            </select>
                          </div>

                          <div className='md:col-span-1,5'>
                            <label htmlFor='email'>Professor(a)</label>
                            <select
                              type='text'
                              name='email'
                              id='email'
                              className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                              value=''
                              placeholder=''>
                              <option value='1'></option>
                            </select>
                          </div>

                          <div className='md:col-span-1'>
                            <label htmlFor='address'>Sala</label>
                            <select
                              type='text'
                              name='address'
                              id='address'
                              className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                              value=''
                              placeholder=''>
                              <option value='1'></option>
                            </select>
                          </div>

                          <div className='md:col-span-1,5'>
                            <label htmlFor='address'>Dia</label>
                            <select
                              type='text'
                              name='address'
                              id='address'
                              className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                              value=''
                              placeholder=''>
                              <option value='1'></option>
                            </select>
                          </div>

                          <div className='md:col-span-1'>
                            <label htmlFor='address'>Aulas</label>
                            <select
                              type='text'
                              name='address'
                              id='address'
                              className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                              value=''
                              placeholder=''>
                              <option value='1'>1 Aula</option>
                              <option value='2'>2 Aulas</option>
                              <option value='3'>3 Aulas</option>
                              <option value='4'>4 Aulas</option>
                            </select>
                          </div>

                          <div className='mt-5 md:col-span-6 text-right'>
                            <div className='inline-flex items-end'>
                              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                Adicionar Horário
                              </button>
                            </div>
                            <div className='inline-flex items-end'>
                              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                Adicionar Semana
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CadastrarHorario;
