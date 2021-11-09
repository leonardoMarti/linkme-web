import { request } from '../http/request';
import { ROUTES } from '../routes';

export const SkillService = {
  findAll: () => {
    return request.get(ROUTES.SKILLS, true);
  },
};
