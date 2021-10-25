import { request } from '../http/request';
import { ROUTES } from '../routes';
import queryString from 'query-string';

export const UserService = {
  save: (data) => {
    return request.save(ROUTES.USERS, data);
  },
  findByPk: (id) => {
    return request.get(
      `${ROUTES.USERS}?${queryString.stringify(id)}`,
    );
  },
};
