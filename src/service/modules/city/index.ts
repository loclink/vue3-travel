import { http } from '../../index';
import type { IResponseData } from '../../types';

// 请求所有城市数据
const getCityAllData = (): Promise<IResponseData> => {
  return http.get({
    url: '/city/all',
    loading: true
  });
};

export { getCityAllData };
