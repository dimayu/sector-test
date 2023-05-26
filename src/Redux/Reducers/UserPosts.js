import { SET_USER_POSTS } from '../Constants';

const initialState = {
  userPosts: [],
  loaded: false,
};

const userPosts = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_USER_POSTS:
      return {
        ...state,
        userPosts: payload,
        loaded: true,
      };
    default: return state;
  }
}

export default userPosts;