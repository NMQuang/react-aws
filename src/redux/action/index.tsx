import { IOrderAddResponse } from 'src/model/iOrder';
import { IOtherMasterResponse } from 'src/model/iOtherMaster';
import { IPostCodeResponse } from 'src/model/iPostCode';
import { ISelfBranchResponse } from 'src/model/iSelfBranch';
import { ActionType } from '../action-types';

/*Get post code*/
interface GetPostCodeAction {
  type: ActionType.GET_POST_CODE;
}

interface GetPostCodeSuccesAction {
  type: ActionType.GET_POST_CODE_SUCCESS;
  payload: IPostCodeResponse[];
}

interface GetPostCodeErrorAction {
  type: ActionType.GET_POST_CODE_ERROR;
  payload: string;
}

/*Get branch list master*/
interface GetBranchMasterAction {
  type: ActionType.GET_BRANCH_MASTER;
}

interface GetBranchMasterSuccesAction {
  type: ActionType.GET_BRANCH_MASTER_SUCCESS;
  payload: ISelfBranchResponse[];
}

interface GetBranchMasterErrorAction {
  type: ActionType.GET_BRANCH_MASTER_ERROR;
  payload: string;
}

/*Get object list master*/
interface GetMasterAction {
  type: ActionType.GET_MASTER;
}

interface GetMasterSuccesAction {
  type: ActionType.GET_MASTER_SUCCESS;
  payload: IOtherMasterResponse;
}

interface GetMasterErrorAction {
  type: ActionType.GET_MASTER_ERROR;
  payload: string;
}

interface OrderAction {
  type: ActionType.ORDER;
}

interface OrderSuccessAction {
  type: ActionType.ORDER_SUCCESS;
  payload: IOrderAddResponse;
}

interface OrderErrorAction {
  type: ActionType.ORDER_ERROR;
  payload: string;
}

export type Action =
  | GetPostCodeAction
  | GetPostCodeSuccesAction
  | GetPostCodeErrorAction
  | GetBranchMasterAction
  | GetBranchMasterSuccesAction
  | GetBranchMasterErrorAction
  | GetMasterAction
  | GetMasterSuccesAction
  | GetMasterErrorAction
  | OrderAction
  | OrderSuccessAction
  | OrderErrorAction;
