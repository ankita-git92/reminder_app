import { combineReducers } from 'redux';
import AuthReducer from './reducers/Auth';

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export { rootReducer };
