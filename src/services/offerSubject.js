import { api } from 'src/http/api';

export const getOfferSubjects = async () => {
  try {
    const { data } = await api.get('/offersubjects');
    return data;
  } catch (e) {
    console.warn(e);
  }
};

export const createOfferSubject = async payload => {
  try {
    await api.post('/offersubject/store', payload);
  } catch (e) {
    console.warn(e);
  }
};
