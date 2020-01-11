import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_COMMENTS, FETCH_COMMENTS_ERROR } from "../actions";
import fetchFromLeanCloud from "../helpers";
function* fetchComments(action) {
    try {
        const comments = yield call(fetchFromLeanCloud, "Comment");
        console.log(comments);
        yield put(FETCH_COMMENTS(comments));
    } catch (e) {
        yield put(FETCH_COMMENTS_ERROR(e));
    }
}
function* postsSaga() {
    yield takeEvery("NEED_FETCH_COMMENTS", fetchComments);
}

export default postsSaga;
