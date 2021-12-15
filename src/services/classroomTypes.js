import { api } from 'src/http/api';

/**
 *
 * @returns
 */
export const getClassroomTypes = async () => {
  try {
    const { data } = await api.get('/classroomTypes');

    return data;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

/** @param {*} classroomType classroomType object */
export const createClassroomType = async classroomType => {
  try {
    await api.post('/classroomTypes/store', classroomType);
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
export const getClassroomTypeById = async id => {
  try {
    const { data } = await api.get(`/classroomTypes/${id}/show`);

    return data;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

/**
 *
 * @param {string} id
 * @param {*} classroomType classroomType object
 */
export const updateClassroomType = async (id, classroomType) => {
  try {
    await api.put(`/classroomTypes/${id}/update`, classroomType);
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

/**
 *
 * @param {string} id
 * @param {*} classroomType classroomType object
 */
export const deleteClassroomType = async id => {
  try {
    await api.delete(`/classroomTypes/${id}/delete`);
  } catch (e) {
    console.warn(e);
    throw e;
  }
};
