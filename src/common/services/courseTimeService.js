import { request } from '../http/request';
import { ROUTES } from '../routes';

export const CourseTimeService = {
  findAll: () => {
    return request.get(ROUTES.COURSETIME, true);
  },
};
