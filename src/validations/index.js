import * as yup from 'yup';

const SelectItem = yup
  .object({
    value: yup.string(),
    label: yup.string(),
  })
  .nullable()
  .required('Selecione um Item');

export const semesterValidation = yup.object({
  school_year: yup.string().required('É necessário informar o período'),
  curricular_matrix: SelectItem,
  course: SelectItem,
  campus: SelectItem,
});

export const classroomValidation = yup.object({
  building: SelectItem,
  campus: SelectItem,
  description: yup.string(),
  name: yup.string().required('É necessário informar o nome da Sala'),
  max_students: 0,
});
