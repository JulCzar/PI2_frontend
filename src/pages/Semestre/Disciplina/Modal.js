import { useFormik } from 'formik';
import React from 'react';
import { Input, Select } from 'src/components';

function Modal({ onClose }) {
  const formik = useFormik({
    initialValues: {},
  });
  return (
    <div
      className='main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster'
      style={{ background: 'rgba(0,0,0,.7)' }}
      onClick={onClose}>
      <div className='border border-teal-500 shadow-lg modal-container bg-white rounded shadow-lg overflow-y-auto'>
        <div className='modal-content py-4 text-left px-6'>
          <div onClick={e => e.stopPropagation()}>
            <div className='bg-white p-4 px-4 md:p-8 mb-6'>
              <h2 className='font-semibold text-4xl text-gray-600'>
                Ofertar Disciplinas
              </h2>
              <div className='mt-6 grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2'>
                <div className='lg:col-span-2'>
                  <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-7'>
                    <Select
                      className='md:col-span-2'
                      label='Disciplina'
                      name='subject'
                      options={[]}
                    />
                    <Select
                      className='md:col-span-1,5'
                      label='Professor(a)'
                      name='professor'
                      options={[]}
                    />
                    <Select
                      className='md:col-span-1'
                      name='classroom'
                      label='Sala'
                      options={[]}
                    />
                    <Select
                      className='md:col-span-1,5'
                      name='week_day'
                      options={[
                        { value: '1', label: 'Segunda-Feira' },
                        { value: '2', label: 'Terça-Feira' },
                        { value: '3', label: 'Quarta-Feira' },
                        { value: '4', label: 'Quinta-Feira' },
                        { value: '5', label: 'Sexta-Feira' },
                        { value: '6', label: 'Sábado' },
                      ]}
                      label='Dia da Semana'
                    />
                    <Select
                      className='md:col-span-1,5'
                      name='shift'
                      options={[
                        { value: '1', label: 'Matutino' },
                        { value: '2', label: 'Vespertino' },
                        { value: '3', label: 'Noturno' },
                      ]}
                      label='Turno'
                    />
                    <Select
                      className='md:col-span-1,5'
                      name='offer_subject_on_weekdays'
                      isMulti
                      options={[
                        { value: 1, label: '1°' },
                        { value: 2, label: '2°' },
                        { value: 3, label: '3°' },
                        { value: 4, label: '4°' },
                      ]}
                      label='Aula'
                    />

                    <div className='mt-5 md:col-span-6 text-right'>
                      <div className='inline-flex items-end'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                          Adicionar Disciplina
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
  );
}

export default Modal;
