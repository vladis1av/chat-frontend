import { ICurrentUser } from '../redux/userTypes';

export interface IRoom {
  _id?: string;
  title: string;
  author: ICurrentUser;
  messages: Array<IMessage> | [];
}

export interface IMessage {
  _id?: string;
  author: string;
  message: string;
}

export interface RoomApiData {
  data: IRoom;
}

export interface CreateRoomProps {
  title: string;
}
