import axios from "./axios";

/**
 * @param {string} email
 * @param {string} password
 * @param {Function} onSuccess
 * @param {Function} onFail
 */
export const login = (email, password, onSuccess, onFail) => {
  axios
    .post("/user/login", {
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
  onFail
) => {
  axios
    .post("/user", {
      firstname,
      lastname,
      email,
      password,
    })
    .then(() => onSuccess())
    .catch((error) => onFail(error));
};

export const fetchUserDetails = () => {
  axios
    .get("/user", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
    .then(({ data }) => console.log(data))
    .catch((error) => console.error(error));
};

/**
 * @param {string} entityName
 * @param {Function} saveEntities
 */
export const fetchContentEntity = (entityName, saveEntities) => {
  axios
    .get(`/common/${entityName}`)
    .then(({ data }) => saveEntities(data))
    .catch((error) => {});
};

export const fetchSearchOptions = (saveSearchOptions) => {
  axios
    .get("/constellation/names")
    .then(({ data }) => {
      saveSearchOptions(data);
    })
    .catch(() => {});
};

export const fetchRandomMyth = (saveRandomMyth) => {
  axios
    .get("/myth/random")
    .then(({ data }) => {
      saveRandomMyth(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const fetchConstellation = (id, saveConstellation) => {
  axios
    .get(`/constellation/${Number(id)}`)
    .then(({ data }) => {
      saveConstellation(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAddress = async (address) => {
  try {
    const response = await axios.get(`/geocoding/forward/`, {
      params: {
        address: address,
      },
    });
    const result = {
      latitude: response.data[0].latitude,
      longitude: response.data[0].longitude,
    };
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const postFavConstellation = async (constellation_id) => {
  try {
    const response = await axios.post(
      `/constellation/favorite`,
      {
        constellation_id: constellation_id,
      },
      {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response;
  } catch (error) {
    console.log("errors", error.message);
  }
};

export const deleteFavConstellation = async (id) => {
  try {
    const response = await axios.delete(`/constellation/favorite/${id}`, {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response;
  } catch (error) {
    console.log("errors", error.message);
  }
};

export const getFavConstellations = async (saveConstellations) => {
  axios
    .get(`/constellation/favorite`, {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then(({ data }) => saveConstellations(data))
    .catch((error) => {});
};

export const fetchApi = {
  login,
  signup,
  fetchUserDetails,
  fetchContentEntity,
  fetchRandomMyth,
  fetchConstellation,
  getAddress,
  postFavConstellation,
  deleteFavConstellation,
  getFavConstellations,
};

export default fetchApi;
