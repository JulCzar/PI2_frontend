import { api } from 'src/http/api';

export const register = async user => {
  try {
    await api.post('/register', user);
  } catch (e) {
    console.warn(e);
  }
};

/**
 *
 * @param {string} email
 * @param {string} password
 */
export const login = async (email, password) => {
  try {
    const payload = { email, password };

    const { data } = await api.post('/login', payload);

    return data;
  } catch (e) {
    console.warn(e);
  }
};

export const getProfile = async id => {
  try {
    const { data } = await api.get(`/profile/${id}`);

    return data;
  } catch (e) {
    console.warn(e);
  }
};
