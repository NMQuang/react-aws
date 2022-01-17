import { orderAddReducer } from './order/index';
import { combineReducers } from 'redux';
import { otherMasterReducer, selfBranchReducer } from './master';
import postcodeReducer from './postcode';

const reducers = combineReducers({
  postcode: postcodeReducer,
  selfBranchMaster: selfBranchReducer,
  otherMaster: otherMasterReducer,
  orderAdd: orderAddReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
