import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_POSTS, FETCH_POSTS_ERROR } from "../actions";
import fetchFromLeanCloud from "../helpers";
function* fetchPosts(action) {
    try {
        const posts = yield call(fetchFromLeanCloud, "Posts");
        yield put(FETCH_POSTS(posts));
    } catch (e) {
        yield put(FETCH_POSTS_ERROR(e));
    }
}
function* postsSaga() {
    yield takeEvery("NEED_FETCH_POSTS", fetchPosts);
}

export default postsSaga;
