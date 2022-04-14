import axios from './axios';

/**
 * @param {string} email 
 * @param {string} password 
 * @param {Function} onSuccess 
 * @param {Function} onFail 
 */
export const login = (
  email,
  password,
  onSuccess,
  onFail,
) => {
  axios.post('/user/login', {
    email,
    password,
  })
    .then(({ headers }) => onSuccess(headers.authorization))
    .catch((error) => onFail(error));
};

/**
 * @param {string} email 
 * @param {string} password 
 * @param {string} lastname 
 * @param {string} firstname 
 * @param {Function} onSuccess 
 * @param {Function} onFail 
 */
export const signup = (
  email,
  password,
  lastname,
  firstname,
  onSuccess,
  onFail,
) => {
  axios.post('/user', {
    firstname,
    lastname,
    email,
    password,
  })
    .then(() => onSuccess())
    .catch((error) => onFail(error));
};

export const fetchUserDetails = () => {
  axios.get('/user', {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  })
    .then(({ data }) => console.log(data))
    .catch((error) => console.error(error));
};

/**
 * @param {string} entityName 
 * @param {Function} saveEntities 
 */
export const fetchContentEntity = (
  entityName,
  saveEntities,
) => {
  axios.get(`/common/${entityName}`)
    .then(({ data }) => saveEntities(data))
    .catch((error) => {

    });
};

export const fetchSearchOptions = (
  saveSearchOptions,
) => {
  axios.get('/constellation/names')
    .then(({ data }) => {
      saveSearchOptions(data);
    })
    .catch(() => {

    });
};

export const fetchApi = {
  login,
  signup,
  fetchUserDetails,
  fetchContentEntity,
};

export default fetchApi;
