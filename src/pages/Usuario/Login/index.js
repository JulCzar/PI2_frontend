import React from 'react';
import { Button, Form, Input, Layout } from 'src/components';

const Login = () => {
  return (
    <Layout title='Login'>
      <div className='p-6 bg-gray-100 flex items-center justify-center'>
        <div id='main-container'>
          <Form className=''>
            <Input
              label='Login'
              name='email'
              placeholder='mail@unitins.br'
              className='md:col-span-6'
            />
            <Input
              label='Senha'
              name='password'
              placeholder='********'
              className='md:col-span-6'
            />

            <Button>Entrar</Button>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
