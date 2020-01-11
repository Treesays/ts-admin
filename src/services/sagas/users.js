import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_USERS, FETCH_USERS_ERROR } from "../actions";
import fetchFromLeanCloud from "../helpers";
function* fetchUsers(action) {
    try {
        const users = yield call(fetchFromLeanCloud, "_User");
        yield put(FETCH_USERS(users));
    } catch (e) {
        yield put(FETCH_USERS_ERROR(e));
    }
}
function* usersSaga() {
    yield takeLatest("NEED_FETCH_USERS", fetchUsers);
}

export default usersSaga;
