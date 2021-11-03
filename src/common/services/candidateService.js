import { request } from '../http/request';
import { ROUTES } from '../routes';
import queryString from 'query-string';

export const CandidateService = {
  findAll: (data) => {
    return request.get(
      `${ROUTES.CANDIDATES}?${queryString.stringify(data)}`,
      true,
    );
  },
};
