import { SET_POSTS } from '../Constants';

const initialState = {
  posts: [],
  status: null,
};

const posts = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_POSTS:
      return {
        ...state,
        posts: [...payload],
        status: 'fulfilled',
      };
    default: return state;
  }
}

export default posts;