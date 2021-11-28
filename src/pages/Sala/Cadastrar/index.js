import { useFormik } from 'formik';
import React from 'react';
import { Form, Input, Button, Select, Layout } from 'src/components';
import { createSemester } from 'src/services/semester';
import { classroomValidation } from 'src/validations';

const CadastrarSala = () => {
  const formik = useFormik({
    initialValues: {
      campus: null,
      className: '',
      building: null,
      max_students: 0,
    },
    validationSchema: classroomValidation,
    async onSubmit(data) {
      console.log(data);
      try {
        await createSemester(data);
      } catch (e) {}
    },
  });

  const handleSelectChange = name => evt => {
    formik.setFieldValue(name, evt);
  };

  return (
    <Layout title='Cadastro de Sala'>
      <div className='container bg-gray-100 max-w-screen-lg mx-auto'>
        <Form onSubmit={formik.handleSubmit}>
          <Select
            options={[{ label: 'Palmas', value: '1' }]}
            onChange={handleSelectChange('campus')}
            error={Boolean(formik.errors.campus)}
            helperText={formik.errors.campus}
            value={formik.values.campus}
            className='md:col-span-6'
            label='Campus'
            name='campus'
          />
          <Input
            error={Boolean(formik.errors.className)}
            placeholder='Informe o Nome da Sala'
            helperText={formik.errors.className}
            value={formik.values.className}
            onChange={formik.handleChange}
            className='md:col-span-6'
            label='Nome da Sala'
            name='className'
          />
          <Select
            options={[{ label: 'Palmas', value: '1' }]}
            onChange={handleSelectChange('building')}
            error={Boolean(formik.errors.building)}
            placeholder='Informe o Nome da Sala'
            helperText={formik.errors.building}
            value={formik.values.building}
            className='md:col-span-4'
            label='Localização'
            name='building'
          />
          <Input
            error={Boolean(formik.errors.max_students)}
            placeholder='Informe o número de Pessoas'
            helperText={formik.errors.max_students}
            value={formik.values.max_students}
            onChange={formik.handleChange}
            label='Número de Pessoas'
            className='md:col-span-2'
            name='max_students'
            type='number'
          />
          <Input
            error={Boolean(formik.errors.description)}
            helperText={formik.errors.description}
            value={formik.values.description}
            placeholder='Sala com MacBooks'
            onChange={formik.handleChange}
            className='md:col-span-6'
            label='Descrição'
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

export default CadastrarSala;
