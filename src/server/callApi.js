import { call, put } from 'redux-saga/effects';
import request from './request';

export function* callApi(
  url,
  successAction,
  failureAction,
  options,
  resultConverter,
  contentType = 'application/json'
) {
  const defaultOptions = options || {};

  try {
    const response = yield call(request, url, defaultOptions);
    const converted = resultConverter ? resultConverter(response) : response;
    if (successAction) {
      yield put(successAction(converted));
    }
    return converted;
  } catch (err) {
    if (failureAction) {
      yield put(failureAction());
    }
  }
}

export function* callGet(
  url,
  successAction,
  failureAction,
  options,
  resultConverter,
  contentType = 'application/json'
) {
  const defaultOptions = options || {};

  const newOptions = {
    ...defaultOptions,
    method: 'GET'
  };

  return yield callApi(
    url,
    successAction,
    failureAction,
    newOptions,
    resultConverter,
    contentType
  );
}

export function* callPost(
  url,
  successAction,
  failureAction,
  body,
  options,
  resultConverter,
  contentType = 'application/json'
) {
  const defaultOptions = options || {};

  const newOptions = {
    ...defaultOptions,
    method: 'POST',
    body:
      body && contentType === 'application/json' ? JSON.stringify(body) : body
  };

  return yield callApi(
    url,
    successAction,
    failureAction,
    newOptions,
    resultConverter,
    contentType
  );
}

export function* callPatch(
  url,
  successAction,
  failureAction,
  body,
  options,
  resultConverter,
  contentType = 'application/json'
) {
  const defaultOptions = options || {};

  const newOptions = {
    ...defaultOptions,
    method: 'PATCH',
    body:
      body && contentType === 'application/json' ? JSON.stringify(body) : body
  };

  return yield callApi(
    url,
    successAction,
    failureAction,
    newOptions,
    resultConverter,
    contentType
  );
}
