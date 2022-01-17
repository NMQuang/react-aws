import { Dispatch } from 'redux';
import { ActionType } from '../../action-types';
import { Action } from '../../action';
import { callSearchPostCode } from '../../../services/postCode.service';
import { IPostCodeRequest } from 'src/model/iPostCode';

export const getPostCode = (postCode: IPostCodeRequest) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.GET_POST_CODE });

    try {
      // data already converted
      const data = await callSearchPostCode(postCode);
      dispatch({ type: ActionType.GET_POST_CODE_SUCCESS, payload: data });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_POST_CODE_ERROR,
        payload: err.message,
      });
    }
  };
};
