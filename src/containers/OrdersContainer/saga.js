import { select, takeLatest } from 'redux-saga/effects';
// import { makeSelectCurrentPage, makeSelectPageSize, makeSelectFilter } from './selectors';
// import { SEARCH_PEOPLE, receivedPeople, CHANGE_PAGE, HANDLE_REFRESH } from './actions';

export function* getOrdersList() {
  const endpoint = 'profiles/search';
  // const numberOfElements = yield select(makeSelectPageSize());
  //yield callGet(url, receivedPeople, undefined, options, value => value.json);
}

export function* OrdersSaga() {
  yield takeLatest(getOrdersList);
}

export default OrdersSaga;
