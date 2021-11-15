import React from 'react';
import { Layout, Input, Select, Button, Form } from 'src/components';

const CadastrarHorario = () => {
  return (
    <Layout title='Cadastro'>
      <div className='container max-w-screen-lg mx-auto'>
        <Form>
          <Input
            className='md:col-span-6'
            name='full_name'
            label='Período Letivo'
          />
          <Select
            className='md:col-span-3'
            label='Campus'
            options={[{ label: 'Palmas', value: '1' }]}
          />
          <Select
            label='Curso'
            className='md:col-span-3'
            options={[{ label: 'Sistemas de Informação', value: '1' }]}
          />
          <Select
            label='Matriz Curricular'
            className='md:col-span-6'
            options={[
              { label: 'Antiga', value: '1' },
              { label: 'Nova', value: '2' },
            ]}
          />

          <div className='justify-end flex mt-5 md:col-span-6 gap-x-1'>
            <Button>Cancelar</Button>
            <Button>Cadastrar</Button>
          </div>
        </Form>
      </div>
    </Layout>
  );
};

export default CadastrarHorario;
