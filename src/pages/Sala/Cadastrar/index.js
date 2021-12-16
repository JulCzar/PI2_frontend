import { useFormik } from 'formik';
import React from 'react';
import { Form, Input, Button, Select, Layout, Textarea } from 'src/components';
import { createClassroom } from 'src/services/classroom';
import { getClassroomTypes } from 'src/services/classroomTypes';
import { getMatrices } from 'src/services/matrices';
import { capitalizePhrase } from 'src/utils';
import { classroomValidation } from 'src/validations';

const CadastrarSala = () => {
  const [classroomTypes, setCRTypes] = React.useState([]);
  const [campusList, setCampusList] = React.useState([]);

  const formik = useFormik({
    initialValues: {
      classroomType: null,
      campus: null,
      className: '',
      building: null,
      max_students: 0,
    },
    validationSchema: classroomValidation,
    async onSubmit(data) {
      createClassroom(data).catch();
    },
  });

  React.useEffect(() => {
    getClassroomTypes().then(r => setCRTypes(r.ClassroomTypes));
    getMatrices().then(r => {
      const { Resultados: res } = r.matrices;

      const campus = [...new Set(res.map(r => capitalizePhrase(r.Campus)))].map(
        s => ({ label: s, value: s })
      );

      setCampusList(campus);
    });
  }, []);

  const handleSelectChange = name => evt => {
    formik.setFieldValue(name, evt);
  };

  return (
    <Layout title='Cadastro de Sala'>
      <div className='container bg-gray-100 max-w-screen-lg mx-auto'>
        <Form onSubmit={formik.handleSubmit}>
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
            onChange={handleSelectChange('campus')}
            error={Boolean(formik.errors.campus)}
            helperText={formik.errors.campus}
            value={formik.values.campus}
            className='md:col-span-6'
            options={campusList}
            label='Campus'
            name='campus'
          />
          <Select
            options={[{ label: 'Palmas', value: '1' }]}
            onChange={handleSelectChange('building')}
            error={Boolean(formik.errors.building)}
            placeholder='Informe o Nome da Sala'
            helperText={formik.errors.building}
            value={formik.values.building}
            className='md:col-span-3'
            name='building'
            label='Bloco'
          />
          <Input
            error={Boolean(formik.errors.max_students)}
            placeholder='Informe o número de Pessoas'
            helperText={formik.errors.max_students}
            value={formik.values.max_students}
            onChange={formik.handleChange}
            className='md:col-span-3'
            label='Número de Pessoas'
            name='max_students'
            type='number'
          />
          <Textarea
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
