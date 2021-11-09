import { request } from '../http/request';
import { ROUTES } from '../routes';

export const AvailabilityService = {
  findAll: () => {
    return request.get(ROUTES.AVAILABILITIES, true);
  },
};
