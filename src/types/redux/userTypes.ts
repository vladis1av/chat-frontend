export interface UserState {
  currentUser: ICurrentUser | {};
  isAuth: boolean;
  loading: boolean;
  error: string | null;
}

export interface ICurrentUser {
  _id: string;
  username: string;
  fullName: string;
  token: string;
}

export enum UserActionTypes {
  FETCH_USER = 'user/FETCH_USER',
  FETCH_USER_SUCCESS = 'user/FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = 'user/FETCH_USER_ERROR',
}
interface FetchUserAction {
  type: UserActionTypes.FETCH_USER;
}
interface FetchUserSuccessAction {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: ICurrentUser;
}
interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: string;
}
export type UserAction =
  | FetchUserAction
  | FetchUserErrorAction
  | FetchUserSuccessAction;
