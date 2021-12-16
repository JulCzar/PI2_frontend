import { api } from 'src/http/api';

export const getProfessors = async () => {
  try {
    const { data } = await api.get('/professors');

    return data;
  } catch (e) {
    console.warn(e);
  }
};

export const getProfessorByName = async name => {
  try {
    const { data } = await api.get(['/professors', name].join('/'));

    return data;
  } catch (e) {
    console.warn(e);
  }
};
