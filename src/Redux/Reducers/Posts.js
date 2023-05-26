import { SET_POSTS } from '../Constants';

const initialState = {
  posts: [],
  loaded: false,
};

const posts = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_POSTS:
      return {
        ...state,
        posts: [...payload],
        loaded: true,
      };
    default: return state;
  }
}

export default posts;