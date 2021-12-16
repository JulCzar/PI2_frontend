import { api } from 'src/http/api';

export const getMatrices = async () => {
  try {
    const { data } = await api.get('/matrices');
    return data;
  } catch (e) {
    console.warn(e);
  }
};
export const getMatricesByCity = async city => {
  try {
    const { data } = await api.get(['/matrices', city].join('/'));
    return data;
  } catch (e) {
    console.warn(e);
  }
};
