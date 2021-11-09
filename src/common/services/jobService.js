import { request } from '../http/request';
import { ROUTES } from '../routes';

export const JobService = {
  findAll: () => {
    return request.get(ROUTES.JOBS, true);
  },
};
