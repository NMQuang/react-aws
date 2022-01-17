import { Dispatch } from 'redux';
import { IOrderAddHeaderRequest } from 'src/model/iOrder';
import { Action } from 'src/redux/action';
import { ActionType } from 'src/redux/action-types';
import { addOrderService } from 'src/services/order.service';

export const addOrder = (orderInfo: IOrderAddHeaderRequest) => {
  //TODO: sau sẽ thêm IOrderDetailRequest nữa
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.ORDER });

    try {
      const response = await addOrderService(orderInfo);
      if (response.status == 200) {
        dispatch({
          type: ActionType.ORDER_SUCCESS,
          payload: response.data.data,
        });
      } else {
        dispatch({
          type: ActionType.ORDER_ERROR,
          payload: '', // TODO
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      dispatch({
        type: ActionType.ORDER_ERROR,
        payload: err.message,
      });
    }
  };
};
