import axios from './axios';
import getEnvironment from '../../utils/getEnvironment';
import { getStorage } from '../../common/utils/storage';

const BASE_URL = getEnvironment();

const executeRequest = (method, url, data, token = false) => {
  const authtoken = getStorage('token');
  if (token && authtoken) {
    axios.defaults.headers[method][
      'Authorization'
    ] = `Bearer ${authtoken}`;
  }

  return axios[method](`${BASE_URL}${url}`, data);
};

export const request = {
  get: (url, token) => executeRequest('get', url, null, token),
  save: (url, data, token) =>
    executeRequest('post', url, data, token),
  update: (url, data, token) =>
    executeRequest('put', url, data, token),
  remove: (url, token) => executeRequest('delete', url, null, token),
};
