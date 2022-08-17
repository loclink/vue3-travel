import { http } from '@/service/index';
import type { IResponseData } from '../../types';

const getFavorList = (): Promise<IResponseData> => {
  return http.get({
    url: '/favor/list',
    loading: true
  });
};

export { getFavorList };
