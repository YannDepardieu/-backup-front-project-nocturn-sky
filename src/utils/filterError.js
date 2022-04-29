export const filterError = (error) => {
  return error.response.data.message || error.response.data || error.response || error;
};

export default filterError;
