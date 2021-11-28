import { useFormik } from 'formik';
import React from 'react';
import { Layout, Input, Select, Button, Form } from 'src/components';
import { createSemester } from 'src/services/semester';
import { semesterValidation } from 'src/validations';

const CadastrarHorario = () => {
  const formik = useFormik({
    initialValues: {
      full_name: '',
      campus: null,
      course: null,
      curricular_matrix: null,
    },
    validationSchema: semesterValidation,
    async onSubmit(data) {
      console.log({ data });
      try {
        await createSemester(data);
      } catch (e) {}
    },
  });

  const handleSelectChange = name => evt => {
    formik.setFieldValue(name, evt);
  };

  return (
    <Layout title='Cadastro'>
      <div className='container max-w-screen-lg mx-auto'>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            className='md:col-span-6'
            onChange={formik.handleChange}
            value={formik.values.full_name}
            error={Boolean(formik.errors.full_name)}
            helperText={formik.errors.full_name}
            name='full_name'
            label='Período Letivo'
          />
          <Select
            onChange={handleSelectChange('campus')}
            error={Boolean(formik.errors.campus)}
            helperText={formik.errors.campus}
            value={formik.values.campus}
            className='md:col-span-3'
            label='Campus'
            name='campus'
            options={[{ label: 'Palmas', value: '1' }]}
          />
          <Select
            onChange={handleSelectChange('course')}
            value={formik.values.course}
            className='md:col-span-3'
            label='Curso'
            name='course'
            options={[{ label: 'Sistemas de Informação', value: '1' }]}
          />
          <Select
            onChange={handleSelectChange('curricular_matrix')}
            value={formik.values.curricular_matrix}
            className='md:col-span-6'
            label='Matriz Curricular'
            name='curricular_matrix'
            options={[
              { label: 'Antiga', value: '1' },
              { label: 'Nova', value: '2' },
            ]}
          />

          <div className='justify-end flex mt-5 md:col-span-6 gap-x-1'>
            <Button type='button'>Cancelar</Button>
            <Button type='submit'>Cadastrar</Button>
          </div>
        </Form>
      </div>
    </Layout>
  );
};

export default CadastrarHorario;
