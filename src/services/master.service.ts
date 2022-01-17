import { ISelfBranchRequest } from './../model/iSelfBranch';
import baseEndPoint from 'src/configs/endpoint.config';
import request from 'src/ultis/api.ulti';
import {
  ENDPOINT_BRANCH_MASTER_LIST,
  ENDPOINT_ORDER_MASTER_LIST,
  METHOD_GET,
  METHOD_POST,
} from 'src/constants/constants';

export const callGetSelfBranchMaster = async () => {
  const url = baseEndPoint.baseUrl;
  const endpoint = ENDPOINT_BRANCH_MASTER_LIST;

  const response = await request(`${url}/${endpoint}`, METHOD_GET, null, null, null);
  return response;
};

export const callGetOtherMaster = async (branchCode: ISelfBranchRequest) => {
  const url = baseEndPoint.baseUrl;
  const endpoint = ENDPOINT_ORDER_MASTER_LIST;
  const data = branchCode;
  const response = await request(`${url}/${endpoint}`, METHOD_POST, data, null, null);
  return response;
};
