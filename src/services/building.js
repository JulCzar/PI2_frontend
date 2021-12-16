import { api } from 'src/http/api';

export const getBuildings = async () => {
  try {
    const { data } = api.get('/buildings');
    return data;
  } catch (e) {
    console.warn(e);
  }
};
