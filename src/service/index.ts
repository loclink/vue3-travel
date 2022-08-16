import { useCommonStore } from '../store/modules/common';
import Request from './request';
import { BASE_URL, TIME_OUT } from './request/config';
const commonStore = useCommonStore();

const http = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,

  // 定义显示加载动画方法
  showLoading() {
    commonStore.isLoading = true;
  },

  // 隐藏加载动画
  hideLoading() {
    commonStore.isLoading = false;
  },

  // 单个实例拦截器
  interceptors: {
    // 请求拦截
    requestInterceptors: (config) => {
      return config;
    },

    // 请求失败
    requestInterceptorsCatch: (err) => {
      return err;
    },

    // 响应拦截
    responseInterceptors: (res) => {
      return res;
    }

    // 响应失败拦截
    // responseInterceptorsCatch: (err) => {
    //   return err;
    // }
  }
});
export { http };
