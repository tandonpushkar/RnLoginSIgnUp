import {combineReducers} from 'redux';
import {reducers} from '@constants';
import {loginSlice} from '@services';

const appReducer = combineReducers({
  [reducers.LOGIN]: loginSlice.reducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
