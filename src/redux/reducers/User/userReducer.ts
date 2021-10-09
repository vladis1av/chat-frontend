import {
  UserState,
  UserAction,
  UserActionTypes,
} from '../../../types/redux/userTypes';

const initialState: UserState = {
  currentUser: {},
  isAuth: false,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return {
        ...state,
        loading: true,
        isAuth: false,
        error: null,
        currentUser: {},
      };

    case UserActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        currentUser: action.payload,
      };

    case UserActionTypes.FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        isAuth: false,
        error: action.payload,
        currentUser: {},
      };

    default:
      return state;
  }
};

export default userReducer;
