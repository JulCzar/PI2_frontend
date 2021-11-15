import React from 'react';
import { Form, Input, Button, Select, Layout } from 'src/components';

const CadastrarSala = () => (
  <Layout title='Cadastro de Horário'>
    <div className='container bg-gray-100 max-w-screen-lg mx-auto'>
      <Form>
        <Select
          label='Campus'
          className='md:col-span-6'
          options={[{ label: 'Palmas', value: '1' }]}
        />
        <Input
          className='md:col-span-6'
          label='Nome da Sala'
          placeholder='Informe o Nome da Sala'
        />
        <Select label='Localização' className='md:col-span-4' options={[]} />
        <Input
          name='text'
          label='Número de Pessoas'
          className='md:col-span-2'
          placeholder='Informe o número de Pessoas'
        />
        <Input
          className='md:col-span-6'
          label='Descrição'
          placeholder='Sala com MacBooks'
        />
        <div className='justify-end flex mt-5 md:col-span-6 gap-x-1'>
          <Button>Cancelar</Button>
          <Button>Cadastrar</Button>
        </div>
      </Form>
    </div>
  </Layout>
);

export default CadastrarSala;
