import { http } from '@/service';
import type { IResponseData } from '../../types';

// 获取房源详情信息
const getDetailInfo = (houseId: string[] | string): Promise<IResponseData> => {
  return http.get({
    url: '/detail/infos',
    params: { houseId },
    loading: true
  });
};

export { getDetailInfo };
