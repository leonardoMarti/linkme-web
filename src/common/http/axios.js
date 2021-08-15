import axios from "axios";

const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    config.timeout = 300000;
    config.headers = config.headers || {};
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response)
);

export default instance;
