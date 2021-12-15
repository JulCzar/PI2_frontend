import { api } from 'src/http/api';

/**
 *
 * @returns
 */
export const getSemesters = async () => {
  try {
    const { data } = await api.get('/semester');

    return data;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

/** @param {*} semester semester object */
export const createSemester = async semester => {
  try {
    await api.post('/semester/store', semester);
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

/**
 *
 * @param {string} id
 * @returns
 */
export const getSemesterById = async id => {
  try {
    const { data } = await api.get(`/semester/${id}/show`);

    return data;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

/**
 *
 * @param {string} id
 * @param {*} semester semester object
 */
export const updateSemester = async (id, semester) => {
  try {
    await api.put(`/semester/${id}/update`, semester);
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

/**
 *
 * @param {string} id
 * @param {*} semester semester object
 */
export const deleteSemester = async id => {
  try {
    await api.delete(`/semester/${id}/delete`);
  } catch (e) {
    console.warn(e);
    throw e;
  }
};
