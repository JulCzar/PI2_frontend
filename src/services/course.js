import { api } from 'src/http/api';

export const getCourses = async () => {
  try {
    const { data } = await api.get('/course');
    return data;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};
