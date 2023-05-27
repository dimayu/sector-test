import { SET_USER_POSTS } from '../Constants';

const initialState = {
  userPosts: [],
  status: null,
};

const userPosts = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_USER_POSTS:
      return {
        ...state,
        userPosts: payload,
        status: 'fulfilled',
      };
    default: return state;
  }
}

export default userPosts;