import { select, takeLatest } from 'redux-saga/effects';
// import { makeSelectOrders } from './selectors';
// import { getOrdersList } from './actions';

export function* getOrdersList() {
  // const endpoint;
  // yield select();
  // yield callGet(url, successAction, undefined, options, value => value.json);
}

export function* OrdersSaga() {
  yield takeLatest(getOrdersList);
}

export default OrdersSaga;
