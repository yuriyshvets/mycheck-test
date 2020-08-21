import { Event, Status } from '../../types';

export interface BasicAction<T> {
  type: T;
}

export interface BasicActionWithPayload<T> {
  type: string;
  payload: T;
}

export type SetEventsAction = BasicActionWithPayload<Event[]>;

export interface UpdateGuestPayload {
  eventId: number;
  guestId: number;
  status: Status;
}

export type UpdateGuestAction = BasicActionWithPayload<UpdateGuestPayload>;

export type ActionTypes = SetEventsAction | UpdateGuestAction;
