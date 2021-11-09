import { request } from '../http/request';
import { ROUTES } from '../routes';

export const IdiomService = {
  findAll: () => {
    return request.get(ROUTES.IDIOM, true);
  },
};
