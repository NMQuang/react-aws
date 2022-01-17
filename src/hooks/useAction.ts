import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, actionMasterCreators, actionOrderCreators } from '../redux';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useActions: any = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useMasterActions: any = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionMasterCreators, dispatch);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useOrderActions: any = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionOrderCreators, dispatch);
};
