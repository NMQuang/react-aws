import { removeFromLocalStorage } from './../libs/utils';
import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { loadFromLocalStorage } from 'src/libs/utils';
import baseEndPoint from '../configs/endpoint.config';
import firebase from 'firebase/compat';
import { URL_LOGIN } from 'src/constants/constants';

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const isBaseUrl = config.url?.startsWith(baseEndPoint.baseUrl);
  const headers = {
    'x-access-token': loadFromLocalStorage('token'),
  };
  if (isBaseUrl) {
    config.headers = { ...headers };
  }
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  // Catch 400 or 422 error here
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  // To do convert json to class here
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  if (error.response?.status == 401) {
    await firebase.auth().signOut();
    removeFromLocalStorage('auth');
    removeFromLocalStorage('token');

    window.location.replace(URL_LOGIN);
  }

  // To do refresh token here
  return await Promise.reject(error);
};

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
