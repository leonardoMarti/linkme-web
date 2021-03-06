import { request } from '../http/request';
import { ROUTES } from '../routes';

export const SessionService = {
  signIn: ({ email, password }) => {
    return request.save(ROUTES.SESSIONS, { email, password });
  },
};
