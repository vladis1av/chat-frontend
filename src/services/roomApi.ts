import { CreateRoomProps, RoomApiData, IRoom } from '../types/api/roomApiTypes';
import { api } from '../core/axios';

const roomApi = {
  async getAllRooms() {
    const { data } = await api.get<IRoom>('/room');
    return data;
  },

  async getRoomById(id: string) {
    const { data } = await api.get<IRoom>(`/room/${id}`);
    return data;
  },

  async createRoom({ title }: CreateRoomProps) {
    const { data } = await api.post<CreateRoomProps, RoomApiData>(
      '/room/${id}',
      { title },
    );
    return data;
  },
};

export default roomApi;
