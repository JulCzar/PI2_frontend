import { FormikConsumer, useFormik } from 'formik';
import React from 'react';
import { Button, Select } from 'src/components';
import { getProfessors } from 'src/services/professor';
import { capitalizePhrase } from 'src/utils';
import { FaPlusCircle, FaTrash } from 'react-icons/fa';

const getWeek = () => ({
  subject: '',
  shift: null,
  week_day: null,
  professor: null,
  classroom: null,
  offer_subject_on_weekdays: null,
});

function Modal({ onClose }) {
  const [professors, setProfessors] = React.useState([]);
  const formik = useFormik({
    initialValues: {
      days: [getWeek()],
    },
    onSubmit(data) {
      console.log(data);
    },
  });

  React.useEffect(() => {
    getProfessors().then(p => setProfessors(p.professors.Resultados));
  }, []);

  const addDay = () => {
    formik.setFieldValue('days', [...formik.values.days, getWeek()]);
  };

  const removeFromDays = index => () => {
    formik.setFieldValue(
      'days',
      formik.values.days.filter((_, i) => i !== index)
    );
  };

  const getProfList = () => {
    return professors
      .map(p => ({
        value: p.Nome,
        label: capitalizePhrase(p.Nome),
      }))
      .sort((p1, p2) => {
        if (p1.label > p2.label) return -1;
        if (p1.label < p2.label) return -1;
        return0;
      });
  };

  const handleSelectChange = (name, index) => ({
    onChange(value) {
      const copyOfDays = [...formik.values.days];

      copyOfDays[index][name] = value;

      console.log(copyOfDays);
      formik.setFieldValue(copyOfDays);
    },
    value: formik.values.days[index][name],
  });

  return (
    <div
      className='main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster'
      style={{ background: 'rgba(0,0,0,.7)' }}
      onClick={onClose}>
      <div className='border border-teal-500 shadow-lg modal-container bg-white rounded overflow-y-none'>
        <div className='modal-content py-4 text-left px-6'>
          <div onClick={e => e.stopPropagation()}>
            <div className='bg-white p-4 px-4 md:p-8 mb-6 max-w-7xl'>
              <h2 className='font-semibold text-4xl text-gray-600'>
                Ofertar Disciplinas
              </h2>
              <div className='mt-6 grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2'>
                <form className='lg:col-span-2' onSubmit={formik.handleSubmit}>
                  {formik.values.days.map((day, i) => (
                    <div className='flex items-end gap-x-3'>
                      <div
                        key={`form-item-${i}`}
                        className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-12 mt-3 w-full'>
                        <Select
                          {...handleSelectChange('subject', i)}
                          className='md:col-span-2'
                          label='Disciplina'
                          name='subject'
                          options={[
                            { label: 'teste 1', value: '1' },
                            { label: 'teste 2', value: '2' },
                          ]}
                        />
                        <Select
                          {...handleSelectChange('professor', i)}
                          className='md:col-span-2'
                          options={getProfList()}
                          label='Professor(a)'
                          name='professor'
                        />
                        <Select
                          {...handleSelectChange('classroom', i)}
                          className='md:col-span-2'
                          name='classroom'
                          label='Sala'
                          options={[]}
                        />
                        <Select
                          {...handleSelectChange('shift', i)}
                          className='md:col-span-2'
                          name='shift'
                          options={[
                            { value: '1', label: 'Matutino' },
                            { value: '2', label: 'Vespertino' },
                            { value: '3', label: 'Noturno' },
                          ]}
                          label='Turno'
                        />
                        <Select
                          {...handleSelectChange('week_day', i)}
                          className='md:col-span-2'
                          name='week_day'
                          options={[
                            { value: '1', label: 'Segunda-Feira' },
                            { value: '2', label: 'Terça-Feira' },
                            { value: '3', label: 'Quarta-Feira' },
                            { value: '4', label: 'Quinta-Feira' },
                            { value: '5', label: 'Sexta-Feira' },
                            { value: '6', label: 'Sábado' },
                          ]}
                          label='Dia da Semana'
                        />
                        <Select
                          {...handleSelectChange(
                            'offer_subject_on_weekdays',
                            i
                          )}
                          name='offer_subject_on_weekdays'
                          className='md:col-span-2'
                          isClearable={false}
                          label='Aula'
                          isMulti
                          options={[
                            { value: 1, label: '1°' },
                            { value: 2, label: '2°' },
                            { value: 3, label: '3°' },
                            { value: 4, label: '4°' },
                          ]}
                        />
                      </div>
                      <div
                        className=' flex flex-col justify-center'
                        onClick={removeFromDays(i)}>
                        <div className='w-10 h-10 bg-blue-500 hover:bg-blue-600 flex justify-center items-center rounded-lg'>
                          <FaTrash color='white' />
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className='mt-5 md:col-span-full flex justify-center'>
                    <Button type='button' onClick={addDay}>
                      <div className='flex items-center gap-x-3'>
                        <FaPlusCircle />
                        Adicionar Disciplina
                      </div>
                    </Button>
                  </div>
                  <div className='mt-5 md:col-span-full flex justify-end'>
                    <Button>Adicionar Semana</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
