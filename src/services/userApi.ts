import { ICurrentUser } from '../types/redux/userTypes';
import { api } from '../core/axios';
import {
  LoginApiProps,
  RegisterApiProps,
  UserApiData,
} from '../types/api/userApiTypes';

const userApi = {
  async login({ username, password }: LoginApiProps) {
    const { data } = await api.post<LoginApiProps, UserApiData>(
      '/auth/signup',
      { username, password },
    );
    return data;
  },

  async registration({ username, fullname, password }: RegisterApiProps) {
    const { data } = await api.post<RegisterApiProps, UserApiData>(
      '/auth/signup',
      { username, fullname, password },
    );
    return data;
  },

  async getMe() {
    const { data } = await api.get<ICurrentUser>('/auth/me');
    return data;
  },
};

export default userApi;
