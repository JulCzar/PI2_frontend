import { api } from 'src/http/api';

export const getOfferSubjects = async () => {
  try {
    const { data } = await api.get('/offersubjects');
    return data;
  } catch (e) {
    console.warn(e);
  }
};
