import { http } from '@/service/index';
import type { IResponseData } from '../../types';

const getHotSuggests = (): Promise<IResponseData> => {
  return http.request({
    url: '/home/hotSuggests',
    method: 'get'
  });
};

export { getHotSuggests };
