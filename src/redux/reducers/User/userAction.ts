import { LoginApiProps } from '../../../types/api/userApiTypes';
import { UserAction, UserActionTypes } from '../../../types/redux/userTypes';
import { Dispatch } from 'redux';
import userApi from '../../../services/userApi';

export const login = ({ username, password }: LoginApiProps) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionTypes.FETCH_USER });
    try {
      const data = await userApi.login({ username, password });
      localStorage.setItem('token', data.token);
      dispatch({ type: UserActionTypes.FETCH_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: 'Неверный логин или пароль',
      });
    }
  };
};
