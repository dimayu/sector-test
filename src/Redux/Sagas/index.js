import { takeEvery, call, put } from '@redux-saga/core/effects';

import { GET_COMMENTS, GET_POSTS, GET_USER, GET_USER_POSTS } from '../Constants';
import { getComments, getPosts, getUser, getUserPosts } from '../../Api/Api';
import {
  setComments,
  setPosts, setUser,
  setUserPosts
} from '../Actions/ActionCreator';

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

//User Posts
export function* handleUserPosts({ payload: { id }}) {
  yield delay();
  const { data } = yield call(getUserPosts, id);
  yield put(setUserPosts(data));
}

export function* watchSaga() {
  yield takeEvery(GET_POSTS, handlePosts);
  yield takeEvery(GET_USER, handleUser);
  yield takeEvery(GET_COMMENTS, handleComments);
  yield takeEvery(GET_USER_POSTS, handleUserPosts);
}

export default function* rootSaga() {
  yield watchSaga();
}