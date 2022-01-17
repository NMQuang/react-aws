import { IOtherMasterResponse } from 'src/model/iOtherMaster';
import { ISelfBranchResponse } from './../../../model/iSelfBranch';
import { ActionType } from '../../action-types';
import { Action } from '../../action';

interface iSelfBranchState {
  loadingBranch: boolean;
  errorBranch: string | null;
  dataBranch: ISelfBranchResponse[] | null;
}

const initialSelfBranchState: iSelfBranchState = {
  loadingBranch: false,
  errorBranch: null,
  dataBranch: null,
};

export const selfBranchReducer = (
  state: iSelfBranchState = initialSelfBranchState,
  action: Action
): iSelfBranchState => {
  switch (action.type) {
    case ActionType.GET_BRANCH_MASTER:
      return { loadingBranch: true, errorBranch: null, dataBranch: [] };
    case ActionType.GET_BRANCH_MASTER_SUCCESS:
      return { loadingBranch: false, errorBranch: null, dataBranch: action.payload };
    case ActionType.GET_BRANCH_MASTER_ERROR:
      return { loadingBranch: false, errorBranch: action.payload, dataBranch: [] };
    default:
      return state;
  }
};

interface iMasterState {
  loadingMaster: boolean;
  errorMaster: string | null;
  dataMaster: IOtherMasterResponse | null;
}

const initialOtherMasterState: iMasterState = {
  loadingMaster: false,
  errorMaster: null,
  dataMaster: null,
};

export const otherMasterReducer = (
  state: iMasterState = initialOtherMasterState,
  action: Action
): iMasterState => {
  switch (action.type) {
    case ActionType.GET_MASTER:
      return {
        loadingMaster: true,
        errorMaster: null,
        dataMaster: { clientData: { companyList: [], branchList: [], customerList: [] }, siteData: [] },
      };
    case ActionType.GET_MASTER_SUCCESS:
      return { loadingMaster: false, errorMaster: null, dataMaster: action.payload };
    case ActionType.GET_MASTER_ERROR:
      return {
        loadingMaster: false,
        errorMaster: action.payload,
        dataMaster: { clientData: { companyList: [], branchList: [], customerList: [] }, siteData: [] },
      };
    default:
      return state;
  }
};
