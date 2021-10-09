import { combineReducers } from 'redux';
import userReducer from './User/userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
