import { api } from 'src/http/api';

/**
 *
 * @returns
 */
export const getClassrooms = async () => {
  try {
    const { data } = await api.get('/classrooms');

    return data;
  } catch (e) {
    console.warn(e);
  }
};

/** @param {*} classroom classroom object */
export const createClassroom = async classroom => {
  try {
    await api.post('/classroom/store', classroom);
  } catch (e) {
    console.warn(e);
  }
};

/**
 *
 * @param {string} id
 * @returns
 */
export const getClassroomById = async id => {
  try {
    const { data } = await api.get(`/classroom/${id}/show`);

    return data;
  } catch (e) {
    console.warn(e);
  }
};

/**
 *
 * @param {string} id
 * @param {*} classroom classroom object
 */
export const updateClassroom = async (id, classroom) => {
  try {
    await api.put(`/classroom/${id}/update`, classroom);
  } catch (e) {
    console.warn(e);
  }
};

/**
 *
 * @param {string} id
 * @param {*} classroom classroom object
 */
export const deleteClassroom = async id => {
  try {
    await api.delete(`/classroom/${id}/delete`);
  } catch (e) {
    console.warn(e);
  }
};
