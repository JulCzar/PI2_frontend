import React from 'react';
import { Button, Select, Layout, Form } from 'src/components';

const Permissao = () => {
  return (
    <Layout title='Permissões de Usuários'>
      <div className=' p-6 bg-gray-100 flex items-center justify-center'>
        <div className='container max-w-screen-md mx-auto'>
          <Form>
            <Select
              className='md:col-span-6'
              label='Grupo'
              name='group'
              options={[]}
            />
            <Select
              className='md:col-span-6'
              label='Permissões'
              name='Permissions'
              options={[]}
            />
            <div className='flex gap-3 mt-5 md:col-span-6 w-full justify-end'>
              <Button type='button'>Cancelar</Button>
              <Button>Salvar</Button>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default Permissao;
