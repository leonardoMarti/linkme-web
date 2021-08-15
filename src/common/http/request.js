import axios from './axios';
import getEnvironment from '../../utils/getEnvironment';

const BASE_URL = getEnvironment();

const executeRequest = (method, url, data) => axios[method](`${BASE_URL}${url}`, data);

export default {
  get: url => executeRequest('get', url),
  save: (url, data) => executeRequest('post', url, data),
  update: (url, data) => executeRequest('put', url, data),
  remove: url => executeRequest('delete', url)
};
