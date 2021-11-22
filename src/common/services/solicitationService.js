import { request } from '../http/request';
import { ROUTES } from '../routes';
import queryString from 'query-string';

export const SolicitationService = {
  findByPk: (id) => {
    return request.get(
      `${ROUTES.SOLICITATIONS}?${queryString.stringify(id)}`,
      true,
    );
  },
  save: (data) => {
    return request.save(ROUTES.SOLICITATIONS, data, true);
  },
  update: (data) => {
    return request.update(ROUTES.SOLICITATIONS, data, true);
  },
};
