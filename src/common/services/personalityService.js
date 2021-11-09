import { request } from '../http/request';
import { ROUTES } from '../routes';

export const PersonalityService = {
  findAll: () => {
    return request.get(ROUTES.PERSONALITIES, true);
  },
};
