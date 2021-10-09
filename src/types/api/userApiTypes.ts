import { ICurrentUser } from '../redux/userTypes';

export interface LoginApiProps {
  username: string;
  password: string;
}

export interface RegisterApiProps extends LoginApiProps {
  fullname: string;
}

export interface UserApiData {
  data: ICurrentUser;
}
