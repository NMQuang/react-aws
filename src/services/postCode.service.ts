import { METHOD_GET } from './../constants/constants';
import baseEndPoint from 'src/configs/endpoint.config';
import { IPostCodeRequest, IPostCodeResponse } from 'src/model/iPostCode';
import request from 'src/ultis/api.ulti';

export const callSearchPostCode = async (postCode: IPostCodeRequest) => {
  const url = baseEndPoint.postCodeBaseUrl;
  const filter = postCode.postcode.length == 7 ? postCode.postcode : `${postCode.postcode}*`;

  const response = await request(`${url}${filter}`, METHOD_GET, null, null, null);
  return handleResponse(response);
};

const handleResponse = (response: any) => {
  // data of response
  const resVal = response.data;
  // data of Api
  const apiData = resVal.data;
  // eslint-disable-next-line prefer-const
  let rtnData: any = [];
  if (apiData != null){
      apiData.forEach((obj: any) => {
          const newFormat: any = {
              postCode: obj.postcode,
              pref: obj.pref,
              city: obj.city,
              town: obj.town,
              allAddress: obj.allAddress,
              latitude: obj.location.latitude,
              longitude: obj.location.longitude
          };
          rtnData.push(newFormat);
      });
  }
  return rtnData;
}
