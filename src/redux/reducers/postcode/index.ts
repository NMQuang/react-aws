import { IPostCodeResponse } from '../../../model/iPostCode';
import { ActionType } from '../../action-types';
import { Action } from '../../action';

interface iPostCodeState {
  loadingPostCode: boolean;
  errorPostCode: string | null;
  dataPostCode: IPostCodeResponse[] | null;
}

const initialState: iPostCodeState = {
  loadingPostCode: false,
  errorPostCode: null,
  dataPostCode: null,
};

const reducer = (state: iPostCodeState = initialState, action: Action): iPostCodeState => {
  switch (action.type) {
    case ActionType.GET_POST_CODE:
      return { loadingPostCode: true, errorPostCode: null, dataPostCode: [] };
    case ActionType.GET_POST_CODE_SUCCESS:
      return { loadingPostCode: false, errorPostCode: null, dataPostCode: action.payload };
    case ActionType.GET_POST_CODE_ERROR:
      return { loadingPostCode: false, errorPostCode: action.payload, dataPostCode: [] };
    default:
      return state;
  }
};

export default reducer;
