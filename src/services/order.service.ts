import { ENDPOINT_ORDER_ADD, METHOD_POST } from './../constants/constants';
import baseEndPoint from 'src/configs/endpoint.config';
import request from 'src/ultis/api.ulti';
import { IOrderAddHeaderRequest } from 'src/model/iOrder';

export const addOrderService = async (orderInfo: IOrderAddHeaderRequest) => {
  const url = baseEndPoint.baseUrl;
  const endpoint = ENDPOINT_ORDER_ADD;

  const response = await request(`${url}/${endpoint}`, METHOD_POST, orderInfo, null, null);
  return response;
};
