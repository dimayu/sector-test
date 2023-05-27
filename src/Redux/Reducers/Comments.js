import { SET_COMMENTS } from '../Constants';

const initialState = {
  comments: [],
  status: null,
};

const comments = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: [...payload],
        status: 'fulfilled',
      };
    default: return state;
  }
}

export default comments;