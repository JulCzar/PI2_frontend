import React from 'react';
import { Button, Form, Input, Layout, Select } from 'src/components';

function Perfil() {
  return (
    <Layout title='Perfil de Usuário'>
      <div className='p-6 bg-gray-100 flex items-center justify-center'>
        <div className='container max-w-screen-lg mx-auto'>
          <Form>
            <Input
              className='md:col-span-6'
              label='Nome'
              placeholder='Informe seu nome'
              name='name'
            />
            <Input
              className='md:col-span-6'
              label='E-mail'
              name='email'
              placeholder='mail@unitins.br'
            />
            <Select
              className='md:col-span-6'
              label='Grupo'
              name='group'
              options={[]}
            />
            <div className='flex gap-3 mt-5 md:col-span-6 w-full justify-end'>
              <Button type='button'>Cancelar</Button>
              <Button>Cadastrar</Button>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
}

export default Perfil;
