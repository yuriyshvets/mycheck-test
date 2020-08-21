import { ACCEPTED, DECLINED } from '../constants';
export type Status = typeof ACCEPTED | typeof DECLINED;
export interface Guest {
  id: number;
  name: string;
  email: string;
  status: Status;
}

export interface Event {
  id: number;
  name: string;
  guestsList: Guest[];
}
