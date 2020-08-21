import { put, takeEvery, all, call } from 'redux-saga/effects';
import { requestGetEvents } from '../../api/events';
import { requestPutGuest } from '../../api/guest';
import { setEvents, updateGuest } from '../actions';
import { SET_EVENTS_ASYNC, UPDATE_GUEST_ASYNC } from '../actionTypes';

function* setEventsAsync() {
  try {
    const data = yield call(requestGetEvents);
    yield put(setEvents(data.data.events));
  } catch (e) {
    alert(e.message);
  }
}

function* watchSetEventsAsync() {
  yield takeEvery(SET_EVENTS_ASYNC, setEventsAsync);
}

function* updateGuestAsync(payload) {
  try {
    yield call(requestPutGuest, payload.payload);
    yield put(updateGuest(payload.payload));
  } catch (e) {
    alert(e.message);
  }
}

function* watchUpdateGuestAsync() {
  yield takeEvery(UPDATE_GUEST_ASYNC, updateGuestAsync);
}

export default function* rootSaga() {
  yield all([watchSetEventsAsync(), watchUpdateGuestAsync()]);
}
