import { SET_USER } from '../Constants';

const initialState = {
  user: [],
  loaded: false,
};

const user = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_USER:
      return {
        user: [...payload],
        loaded: true,
      };
    default: return state;
  }
}

export default user;