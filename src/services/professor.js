import { api } from 'src/http/api';

export const getProfessors = async () => {
  try {
    const { data } = await api.get('/professors');

    return data;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};
