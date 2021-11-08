import React from 'react';
import { Layout } from '../../../components';

const CadastrarSala = () => (
  <Layout title='Cadastro de Horário'>
    <div className='container bg-gray-100 max-w-screen-lg mx-auto'>
      <div>
        <div className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'>
          <div className='mt-6 grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2'>
            <div className='lg:col-span-2'>
              <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6'>
                <div className='md:col-span-6'>
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

                <div className='md:col-span-6'>
                  <label>Nome da Sala</label>
                  <input
                    type='text'
                    name='sala'
                    id='sala'
                    className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                    placeholder='Informe o Nome da Sala'
                  />
                </div>

                <div className='md:col-span-4'>
                  <label>Localização</label>
                  <select
                    type='text'
                    name='localizacao'
                    id='localizacao'
                    className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                    value=''
                    placeholder=''>
                    <option value=''></option>
                  </select>
                </div>

                <div className='md:col-span-2'>
                  <label>Número de Pessoas</label>
                  <input
                    type='text'
                    name='nPessoas'
                    id='nPessoas'
                    className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                    placeholder='Informe o número de Pessoas'
                  />
                </div>

                <div className='md:col-span-6'>
                  <label>Descrição</label>
                  <input
                    type='text'
                    name='descricao'
                    id='descricao'
                    className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                    placeholder='Sala com MacBooks'
                  />
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
  </Layout>
);

export default CadastrarSala;
