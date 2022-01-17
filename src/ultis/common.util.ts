import { IOtherMasterResponse } from 'src/model/iOtherMaster';
import { notSpecialChartRegex } from 'src/constants/constants';
import { IPostCodeResponse } from 'src/model/iPostCode';

export const parseMessage = (message: string, param: string[]) => {
  if (message === undefined || message === null || message.indexOf('%p') < 0) {
    return message;
  }
  let i = 0;
  return message.replace(/%p/g, () => param[i++]);
};

export const formatNumberMoney = (num: string) => {
  // remove all comma in num
  num = num.replace(/,/g, '');
  // add comma
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' VND';
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isEmpty = (value: any) => {
  if (value) {
    return false;
  }
  return true;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isNotSpecialChart = (value: any) => {
  return value.match(notSpecialChartRegex);
};
