import { SET_COMMENTS } from '../Constants';

const initialState = {
  comments: [],
  loaded: false,
};

const comments = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_COMMENTS:
      return {
        comments: [...payload],
        loaded: true,
      };
    default: return state;
  }
}

export default comments;