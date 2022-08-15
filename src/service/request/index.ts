import axios, { AxiosError } from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';
import type { RequestConfig, RequestInterceptors } from './types';

const DEFAULT_LOADING = false;
const DEFAULT_MESSAGE = false;
class Request {
  instance: AxiosInstance;
  interceptors?: RequestInterceptors;

  loading?: boolean;
  message?: boolean;

  showLoading?: () => void;
  hideLoading?: () => void;
  showMessage?: (res: AxiosResponse) => void;
  showErrorMessage?: (errMessage: string) => void;
  authRequest?: (res: AxiosResponse) => void;

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.loading = config.loading ?? DEFAULT_LOADING;
    this.message = config.message ?? DEFAULT_MESSAGE;
    this.showLoading = config.showLoading;
    this.hideLoading = config.hideLoading;
    this.showMessage = config.showMessage;
    this.showErrorMessage = config.showErrorMessage;
    this.authRequest = config.authRequest;
    // 定义单个实例的请求拦截器
    this.instance.interceptors.request.use(this.interceptors?.requestInterceptors, this.interceptors?.requestInterceptorsCatch);

    // 定义单个实例的响应拦截器
    this.instance.interceptors.response.use(this.interceptors?.responseInterceptors, this.interceptors?.responseInterceptorsCatch);

    // 单个请求的请求拦截器
    this.instance.interceptors.request.use(
      (config: RequestConfig) => {
        this.loading && this.showLoading && this.showLoading();
        return config;
      },
      (err: AxiosError) => {
        this.showErrorMessage && this.showErrorMessage(err.message);
        console.log(err);
      }
    );

    // 单个请求的响应拦截器
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        this.loading && this.hideLoading && this.hideLoading();
        this.message && this.showMessage && this.showMessage(res);
        this.authRequest && this.authRequest(res);
        return res.data;
      },
      (err) => {
        this.loading && this.hideLoading && this.hideLoading();
        this.showErrorMessage && this.showErrorMessage(err.message);
        console.log(err);
      }
    );
  }

  // 重置默认值
  resetDefault() {
    this.message = DEFAULT_MESSAGE;
    this.loading = DEFAULT_LOADING;
  }

  // 定义请求方法
  request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.loading = config.loading ?? DEFAULT_LOADING;
      this.message = config.message ?? DEFAULT_MESSAGE;
      // 保存config处理后的数据
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config);
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求的拦截器
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res);
          }
          resolve(res);
          this.resetDefault();
        })
        .catch((err: AxiosError) => {
          reject(err);
          this.resetDefault();
        });
    });
  }

  get<T>(config: RequestConfig): Promise<T> {
    return this.request({ ...config, method: 'get' });
  }

  post<T>(config: RequestConfig): Promise<T> {
    return this.request({ ...config, method: 'post' });
  }

  delete<T>(config: RequestConfig): Promise<T> {
    return this.request({ ...config, method: 'delete' });
  }

  patch<T>(config: RequestConfig): Promise<T> {
    return this.request({ ...config, method: 'patch' });
  }
}

export default Request;
