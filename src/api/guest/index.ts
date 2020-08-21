/* eslint-disable @typescript-eslint/explicit-function-return-type */
import api from '../index';

interface PutGuestRequestPayload {
  eventId: string;
  guestId: string;
}

export const requestPutGuest = (payload: PutGuestRequestPayload) => {
  return api.put(`/guest`, payload);
};
