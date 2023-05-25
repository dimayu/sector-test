import {
  GET_POSTS, GET_USER, GET_COMMENTS,
  SET_POSTS, SET_USER, SET_COMMENTS
} from "../Constants";

//Posts
export const getPosts = () => ({
  type: GET_POSTS,
});

export const setPosts = (payload) => ({
  type: SET_POSTS,
  payload,
});

//User
export const getUser = (id) => ({
  type: GET_USER,
  payload: {
    id,
  },
});

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

//Comments
export const getComments = () => ({
  type: GET_COMMENTS,
});

export const setComments= (payload) => ({
  type: SET_COMMENTS,
  payload,
});