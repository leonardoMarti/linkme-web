import { request } from '../http/request';
import { ROUTES } from '../routes';

export const UserService = {
  save: (data) => {
    return request.save(ROUTES.USERS, data);
  },
};
