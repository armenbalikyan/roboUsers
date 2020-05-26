import { getUsersSuccess, getUsersFailure, GET_USERS_LOADING } from "../actions/user.actions";
import { take, put, call, takeLatest } from 'redux-saga/effects'
import { getUsers } from "../api/Api";


function* getUsersSaga() {
    const response = yield call(getUsers);
    const data = response.data;
    
    if (response.status !== 200) {
        yield take(getUsersFailure)
    }
    yield put(getUsersSuccess(data));
}

export function* watchGetUsers() {
    yield takeLatest(GET_USERS_LOADING, getUsersSaga)
  }
