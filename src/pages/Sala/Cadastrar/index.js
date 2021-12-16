import { useFormik } from 'formik';
import React from 'react';
import { Form, Input, Button, Select, Layout, Textarea } from 'src/components';
import { createClassroom } from 'src/services/classroom';
import { getBuildings } from 'src/services/building';
import { getMatrices } from 'src/services/matrices';
import { capitalizePhrase } from 'src/utils';
import { classroomValidation } from 'src/validations';
import Loading from 'src/pages/Loading';

const CadastrarSala = () => {
  const [campusList, setCampusList] = React.useState([]);
  const [buildings, setBuildings] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  const formik = useFormik({
    initialValues: {
      campus: null,
      name: '',
      building: null,
      description: '',
      max_students: 0,
    },
    validationSchema: classroomValidation,
    async onSubmit(data) {
      createClassroom({
        ...data,
        building: data.building.value,
        campus: data.campus.value,
      });
    },
  });

  React.useEffect(() => {
    Promise.all([
      getMatrices().then(r => {
        const { Resultados: res } = r?.matrices;

        const campus = [
          ...new Set(res.map(r => capitalizePhrase(r.Campus))),
        ].map(s => ({ label: s, value: s }));

        setCampusList(campus);
      }),
      getBuildings().then(b => {
        setBuildings(b?.buildings.map(b => ({ value: b.name, label: b.name })));
      }),
    ]).finally(() => setLoading(false));
  }, []);

  const handleSelectChange = name => evt => {
    formik.setFieldValue(name, evt);
  };

  return (
    <Layout title='Cadastro de Sala'>
      {isLoading && <Loading />}
      <div className='container bg-gray-100 max-w-screen-lg mx-auto'>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            error={Boolean(formik.errors.name)}
            placeholder='Informe o Nome da Sala'
            helperText={formik.errors.name}
            value={formik.values.name}
            onChange={formik.handleChange}
            className='md:col-span-6'
            label='Nome da Sala'
            name='name'
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
            onChange={handleSelectChange('building')}
            error={Boolean(formik.errors.building)}
            placeholder='Informe o Bloco da Sala'
            helperText={formik.errors.building}
            value={formik.values.building}
            className='md:col-span-3'
            options={buildings}
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
            placeholder='Informações da Sala'
            onChange={formik.handleChange}
            className='md:col-span-6'
            name='description'
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
