import { api } from 'src/http/api';

export const getMatrices = async local => {
  try {
    const { data } = await api.get(['/matrices', local].join('/'));
    return data;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};
