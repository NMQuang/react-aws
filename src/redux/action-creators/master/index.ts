import { ISelfBranchRequest } from './../../../model/iSelfBranch';
import { callGetOtherMaster, callGetSelfBranchMaster } from './../../../services/master.service';
import { Dispatch } from 'redux';
import { Action } from 'src/redux/action';
import { ActionType } from 'src/redux/action-types';

export const getBranchMaster = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.GET_BRANCH_MASTER });

    try {
      const response = await callGetSelfBranchMaster();
      if (response.status == 200) {
        dispatch({
          type: ActionType.GET_BRANCH_MASTER_SUCCESS,
          payload: response.data.data,
        });
      } else {
        dispatch({
          type: ActionType.GET_BRANCH_MASTER_ERROR,
          payload: '', // TODO
        });
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_BRANCH_MASTER_ERROR,
        payload: err.message,
      });
    }
  };
};

export const getObjectMaster = (branchCode: ISelfBranchRequest) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.GET_MASTER });

    try {
      const response = await callGetOtherMaster(branchCode);
      if (response.status == 200) {
        dispatch({
          type: ActionType.GET_MASTER_SUCCESS,
          payload: response.data.data,
        });
      } else {
        dispatch({
          type: ActionType.GET_MASTER_ERROR,
          payload: '', // TODO
        });
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_MASTER_ERROR,
        payload: err.message,
      });
    }
  };
};
