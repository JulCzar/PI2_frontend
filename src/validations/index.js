import * as yup from 'yup';

const selectItem = yup
  .object({
    value: yup.string(),
    label: yup.string(),
  })
  .nullable()
  .required('Selecione um Item');

export const semesterValidation = yup.object({
  full_name: yup.string().required('É necessário informar o período'),
  curricular_matrix: selectItem,
  course: selectItem,
  campus: selectItem,
});

export const classroomValidation = yup.object({
  building: selectItem,
  campus: selectItem,
  className: yup.string().required('É necessário informar o nome da Sala'),
  max_students: 0,
});
