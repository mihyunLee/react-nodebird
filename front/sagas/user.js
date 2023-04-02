import { all, fork, takeLatest, put, delay } from "redux-saga/effects";
import axios from "axios";

function logInAPI(data) {
  return axios.post("/api/login", data);
}

function* logIn(action) {
  try {
    console.log("saga login");
    // const result = yield call(logInAPI, action.data);
    // 서버가 구현되기 전에는 delay를 사용하여 dummy data를 받아오자.
    yield delay(1000);
    yield put({
      type: "LOG_IN_SUCCESS",
      // data: result.data,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}

function logOutAPI(data) {
  return axios.post("/api/logout", data);
}

function* logOut(action) {
  try {
    // const result = yield call(logOutAPI, action.data);
    yield delay(1000);
    yield put({
      type: "LOG_OUT_SUCCESS",
      // data: result.data,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
