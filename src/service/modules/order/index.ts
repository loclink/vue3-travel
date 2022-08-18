import { http } from '@/service/index';
import type { IResponseData } from '../../types';
const getOrderList = (params: object): Promise<IResponseData> => {
  return http.get({
    url: '/order/list',
    params,
    loading: true
  });
};

export { getOrderList };
