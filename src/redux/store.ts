import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export type AppState = ReturnType<typeof reducer>;
export default store;
