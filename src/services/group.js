import { api } from 'src/http/api';

export const getGroups = async () => {
  try {
    const { data } = await api.get('/group');
    return data;
  } catch (e) {
    console.warn(e);
  }
};

export const createGroup = async payload => {
  try {
    await api.post('/group', payload);
  } catch (e) {
    console.warn(e);
  }
};

export const editGroup = async payload => {
  try {
    await api.put('/group', payload);
  } catch (e) {
    console.warn(e);
  }
};

export const deleteGroup = async id => {
  try {
    await api.delete(`/group/${id}`);
  } catch (e) {
    console.warn(e);
  }
};
