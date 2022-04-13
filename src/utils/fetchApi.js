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
    .then(({ data }) => onSuccess(data))
    .catch((error) => onFail(error));
};

export const fetchApi = {
  login,
};

export default fetchApi;
