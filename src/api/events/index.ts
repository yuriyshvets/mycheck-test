import api from '../index';
import { Event } from '../../types/index';

export const requestGetEvents = () => {
  return api.get<Event[]>(`/events`);
};
