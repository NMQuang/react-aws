export interface IPostCodeRequest {
  postcode: string;
}

export interface IPostCodeResponse {
  prefCode: string;
  cityCode: string;
  postCode: string;
  oldPostcode: string;
  pref: string;
  city: string;
  town: string;
  allAddress: string;
  latitude: string;
  longitude: string;
}
