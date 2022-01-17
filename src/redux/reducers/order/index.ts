import { IOrderAddResponse } from './../../../model/iOrder';
import { ActionType } from '../../action-types';
import { Action } from '../../action';

interface iOrderState {
  loadingOrder: boolean;
  errorOrder: string | null;
  dataOrder: IOrderAddResponse | 0;
}

const initialOrderState: iOrderState = {
  loadingOrder: false,
  errorOrder: null,
  dataOrder: 0,
};

export const orderAddReducer = (state: iOrderState = initialOrderState, action: Action): iOrderState => {
  switch (action.type) {
    case ActionType.ORDER:
      return { loadingOrder: true, errorOrder: null, dataOrder: 0 };
    case ActionType.ORDER_SUCCESS:
      return { loadingOrder: false, errorOrder: null, dataOrder: action.payload };
    case ActionType.ORDER_ERROR:
      return { loadingOrder: false, errorOrder: action.payload, dataOrder: 0 };
    default:
      return state;
  }
};
