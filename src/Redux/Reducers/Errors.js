import { SET_POSTS_ERROR, SET_COMMENTS_ERROR, SET_USER_ERROR, SET_USER_POSTS_ERROR } from "../Constants";

const initialState = {
  postsError: '',
  commentsError: '',
  userError: '',
  userPostsError: '',
};

const errors = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POSTS_ERROR:
      return {
        ...state,
        postsError: payload,
      };
    case SET_COMMENTS_ERROR:
      return {
        ...state,
        commentsError: payload,
      };
    case SET_USER_ERROR:
      return {
        ...state,
        userError: payload,
      };
    case SET_USER_POSTS_ERROR:
      return {
        ...state,
        userPostsError: payload,
      };
    default: return state;
  }
};

export default errors;