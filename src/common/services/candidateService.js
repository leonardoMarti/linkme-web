import { request } from '../http/request';
import { ROUTES } from '../routes';

export const CandidateService = {
  findAll: () => {
    return request.get(ROUTES.CANDIDATES, true);
  },
};
