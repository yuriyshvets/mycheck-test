import { SET_EVENTS, UPDATE_GUEST } from '../actionTypes';
import { State } from './types';
import { ActionTypes } from '../actions/types';

const initialState = {
  events: null,
};

export default function (state: State = initialState, action: ActionTypes | any): State {
  switch (action.type) {
    case SET_EVENTS: {
      return { ...state, events: action.payload };
    }
    case UPDATE_GUEST: {
      console.log('action', action);
      return {
        ...state,
        events: state.events.map((event) =>
          event.id !== action.payload.eventId
            ? event
            : {
                ...event,
                guestsList: event.guestsList.map((guest) =>
                  guest.id !== action.payload.guestId
                    ? guest
                    : { ...guest, status: action.payload.status },
                ),
              },
        ),
      };
    }
    default:
      return state;
  }
}
