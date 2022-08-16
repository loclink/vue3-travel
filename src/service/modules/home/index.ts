import { http } from '@/service/index';
import type { IResponseData } from '../../types';

// 获取首页建议数据
const getHotSuggests = (): Promise<IResponseData> => {
  return http.request({
    url: '/home/hotSuggests',
    method: 'get'
  });
};

// 获取首页分类数据
const getCategories = (): Promise<IResponseData> => {
  return http.request({
    url: '/home/categories',
    method: 'get'
  });
};

// 获取房源列表
const getHouseList = (params = { page: 1 }): Promise<IResponseData> => {
  return http.request({
    url: '/home/houselist',
    method: 'get',
    params
  });
};

export { getHotSuggests, getCategories, getHouseList };
