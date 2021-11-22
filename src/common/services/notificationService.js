import { request } from '../http/request';
import { ROUTES } from '../routes';
import queryString from 'query-string';

export const NotificationService = {
  findById: (id) => {
    return request.get(
      `${ROUTES.NOTIFICATIONS}?${queryString.stringify(id)}`,
      true,
    );
  },
  save: (data) => {
    return request.save(ROUTES.NOTIFICATIONS, data, true);
  },
  update: (data) => {
    return request.update(ROUTES.NOTIFICATIONS, data, true);
  },
};
