import { takeEvery, call, put } from '@redux-saga/core/effects';

import { GET_COMMENTS, GET_POSTS, GET_USER } from '../Constants';
import { getComments, getPosts, getUser } from '../../Api/Api';
import { setComments, setPosts, setUser } from '../Actions/ActionCreator';

const delay = () => new Promise((resolve) => {
  setTimeout(resolve, 500);
});

//Posts
export function* handlePosts() {
  yield delay();
  const { data } = yield call(getPosts);
  yield put(setPosts(data));
}

//User
export function* handleUser({ payload: { id }}) {
  yield delay();
  const { data } = yield call(getUser, id);
  yield put(setUser(data));
}

//Comments
export function* handleComments() {
  yield delay();
  const { data } = yield call(getComments);
  yield put(setComments(data));
}

export function* watchSaga() {
  yield takeEvery(GET_POSTS, handlePosts);
  yield takeEvery(GET_USER, handleUser);
  yield takeEvery(GET_COMMENTS, handleComments);
}

export default function* rootSaga() {
  yield watchSaga();
}