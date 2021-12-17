import { useFormik } from 'formik';
import React from 'react';
import { Layout, Input, Select, Button, Form } from 'src/components';
import { useLoading } from 'src/hooks/useLoading';
import Loading from 'src/pages/Loading';
import { getMatrices } from 'src/services/matrices';
import { createSemester } from 'src/services/semester';
import { capitalizePhrase } from 'src/utils';
import { semesterValidation } from 'src/validations';

const CadastrarHorario = () => {
  const [campusList, setCampusList] = React.useState([]);
  const { isLoading, endLoading } = useLoading();
  const [matrices, setMatrices] = React.useState([]);

  const formik = useFormik({
    initialValues: {
      school_year: '',
      campus: null,
      course: null,
      curricular_matrix: null,
    },
    validationSchema: semesterValidation,
    async onSubmit(data) {
      const { school_year, course, curricular_matrix } = data;

      const body = {
        school_year,
        course: course.value,
        matrix_curricular_id: curricular_matrix.value,
      };

      await createSemester(body);
    },
  });

  React.useEffect(() => {
    getMatrices()
      .then(r => {
        if (!r?.matrices) return;

        const { Resultados: res } = r.matrices;

        const campus = [
          ...new Set(res.map(r => capitalizePhrase(r.Campus))),
        ].map(s => ({ label: s, value: s }));

        setMatrices(res);
        setCampusList(campus);
      })
      .finally(endLoading);
  }, []);

  const getCoursesList = () => {
    const courses = matrices
      .reduce((acc, act) => {
        if (!acc.filter(m => m.CodCurso === act.CodCurso).length)
          return [...acc, act];
        return acc;
      }, [])
      .filter(m => capitalizePhrase(m.Campus) === formik.values.campus?.value)
      .map(m => ({ value: m.CodCurso, label: m.Curso }));

    return courses;
  };

  const getMatricesList = () => {
    const matricesList = matrices
      .reduce((acc, act) => {
        if (!acc.filter(m => m.Matriz === act.Matriz).length)
          return [...acc, act];
        return acc;
      }, [])
      .filter(m => m.CodCurso === formik.values.course?.value)
      .map(m => ({ value: m.Matriz, label: m.Matriz }));

    return matricesList;
  };

  const handleSelectChange = name => evt => {
    formik.setFieldValue(name, evt);
  };

  return (
    <Layout title='Cadastro de Semestre'>
      <Loading isLoading={isLoading} />
      <div className='container max-w-screen-lg mx-auto'>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            className='md:col-span-6'
            onChange={formik.handleChange}
            value={formik.values.school_year}
            error={Boolean(formik.errors.school_year)}
            helperText={formik.errors.school_year}
            name='school_year'
            label='Período Letivo'
          />
          <Select
            onChange={(...rest) => {
              const onChangeCallback = handleSelectChange('campus');

              formik.setFieldValue('course', null);
              formik.setFieldValue('curricular_matrix', null);

              onChangeCallback(...rest);
            }}
            error={Boolean(formik.errors.campus)}
            helperText={formik.errors.campus}
            value={formik.values.campus}
            className='md:col-span-3'
            options={campusList}
            label='Campus'
            name='campus'
          />
          <Select
            onChange={(...rest) => {
              const onChangeCallback = handleSelectChange('course');

              formik.setFieldValue('curricular_matrix', null);

              onChangeCallback(...rest);
            }}
            value={formik.values.course}
            className='md:col-span-3'
            label='Curso'
            name='course'
            options={getCoursesList()}
          />
          <Select
            onChange={handleSelectChange('curricular_matrix')}
            value={formik.values.curricular_matrix}
            options={getMatricesList()}
            className='md:col-span-6'
            label='Matriz Curricular'
            name='curricular_matrix'
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
