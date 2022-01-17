import axios, { Method, AxiosResponse, AxiosRequestConfig } from 'axios';
import { setupInterceptorsTo } from './interceptor.util';

const instanceAxios = setupInterceptorsTo(axios.create());

const request = (
  url: string,
  method: Method,
  data: any,
  headers: any,
  params: any
): Promise<AxiosResponse> => {
  return instanceAxios.request({
    method,
    url,
    data,
    headers,
    params,
  });
};

export default request;
