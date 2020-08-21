import { SET_EVENTS, SET_EVENTS_ASYNC, UPDATE_GUEST, UPDATE_GUEST_ASYNC } from '../actionTypes';
import { SetEventsAction, UpdateGuestAction, UpdateGuestPayload, BasicAction } from './types';
import { Event } from '../../types';

export const setEvents = (events: Event[]): SetEventsAction => ({
  type: SET_EVENTS,
  payload: events,
});

export const setEventsAsync = (): BasicAction<typeof SET_EVENTS_ASYNC> => ({
  type: SET_EVENTS_ASYNC,
});

export const updateGuest = (payload: UpdateGuestPayload): UpdateGuestAction => ({
  type: UPDATE_GUEST,
  payload,
});

export const updateGuestAsync = (payload: UpdateGuestPayload): UpdateGuestAction => ({
  type: UPDATE_GUEST_ASYNC,
  payload,
});
