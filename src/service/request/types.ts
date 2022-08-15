import type { AxiosRequestConfig, AxiosResponse } from 'axios';

interface RequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (error: any) => any;
  responseInterceptors?: (config: any) => any;
  responseInterceptorsCatch?: (error: any) => any;
}

interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors;
  loading?: boolean;
  message?: boolean;
  showLoading?: () => void;
  hideLoading?: () => void;
  showMessage?: (res: AxiosResponse) => void;
  showErrorMessage?: (errMessage: string) => void;
  authRequest?: (res: AxiosResponse) => void;
}

export type { RequestConfig, RequestInterceptors };
